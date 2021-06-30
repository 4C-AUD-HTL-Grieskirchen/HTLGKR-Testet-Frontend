import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';
import firebase from 'firebase';
import Reference = firebase.storage.Reference;
import {debugOutputAstAsTypeScript} from "@angular/compiler";
import firestore = firebase.firestore;

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    id = '';

    barcode = '';

    stationName = '';
    stationPostal = 0;
    stationCity = '';
    stationAddress = '';

    date = '';
    time = '';

    private storageRef: Reference | undefined;

    constructor(
        private firestore: AngularFirestore,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;

        this.firestore.collection('Registrations').doc(this.id).get().subscribe(doc => {
            const data = doc.data();

            if (data === undefined) {
                console.log('File not found!');
                alert('Es konnte keine Registrierung mit der angegebenen ID gefunden werden!');
                this.router.navigateByUrl('/');
                return;
            }

            // @ts-ignore
            if (data.birthdate !== localStorage.getItem('auth-birth')) {
                console.log('Birthdate invalid!');
                alert('Sie müssen sich zunächst anmelden!');
                this.router.navigateByUrl('/appointment/auth/' + this.id);
                return;
            }

            // @ts-ignore
            this.firestore.collection('ScreeningStations').doc(data.selectedFacility).get().subscribe(station => {
                const stationData = station.data();
                // @ts-ignore
                this.stationName = stationData.name;
                // @ts-ignore
                this.stationAddress = stationData.address;
                // @ts-ignore
                this.stationCity = stationData.city;
                // @ts-ignore
                this.stationPostal = stationData.postalCode;
            });

            // @ts-ignore
            this.firestore.collection('ScreeningStations').doc(data.selectedFacility).collection('timeDays').doc(data.selectedTimeDay).get().subscribe(day => {
                const dayData = day.data();
                // @ts-ignore
                this.date = dayData.date;
            });

            // @ts-ignore
            this.firestore.collection('ScreeningStations').doc(data.selectedFacility).collection('timeDays').doc(data.selectedTimeDay).collection('slots').doc(data.selectedTimeSlot).get().subscribe(slot => {
                const slotData = slot.data();
                // @ts-ignore
                this.time = slotData.time;
            });

            // @ts-ignore
            this.storageRef = firebase.storage().ref(data.barcodelocation + '.svg');
            this.storageRef.getDownloadURL().then(url => {
                fetch(url).then(response => response.text())
                    .then(d => {
                        this.barcode = '<svg width="100%" height="auto " viewBox="0 0 25 25"' + d.split('<svg')[1];
                        document.getElementById('barcode')!.innerHTML = this.barcode;
                    });
            } );
        });
    }

    onCancelClick(): void {
        if (confirm('Sind Sie sicher, dass Sie den Termin am ' + this.date + ' um ' + this.time + ' stornieren wollen?')) {
            this.firestore.collection('Registrations').doc(this.id).delete();
            this.router.navigateByUrl('/appointment/cancelled');
        }
    }
}
