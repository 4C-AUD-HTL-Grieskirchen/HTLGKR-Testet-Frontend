import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';
import firebase from 'firebase';
import Reference = firebase.storage.Reference;
import DocumentReference = firebase.firestore.DocumentReference;

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

        this.firestore.collection('Registrations')
            .doc(this.id)
            .get()
            .subscribe(doc => {
                const data: any = doc.data();

                if (data === undefined) {
                    console.log('File not found!');
                    alert('Es konnte keine Registrierung mit der angegebenen ID gefunden werden!');
                    this.router.navigateByUrl('/');
                    return;
                }

                if (data.birthdate !== localStorage.getItem('auth-birth')) {
                    console.log('Birthdate invalid!');
                    alert('Sie müssen sich zunächst anmelden!');
                    this.router.navigateByUrl('/appointment/auth/' + this.id);
                    return;
                }

                (data.selectedFacility as DocumentReference)
                    .get()
                    .then(station => {
                        const stationData: any = station.data();
                        this.stationName = stationData.name;
                        this.stationAddress = stationData.address;
                        this.stationCity = stationData.city;
                        this.stationPostal = stationData.postalCode;
                    });

                (data.selectedTimeDay as DocumentReference)
                    .get()
                    .then(day => {
                        const dayData: any = day.data();
                        this.date = dayData.date;
                    });

                (data.selectedTimeslot as DocumentReference)
                    .get()
                    .then(slot => {
                        const slotData: any = slot.data();
                        this.time = slotData.time;
                    });

                this.storageRef = firebase.storage().ref(data.barcodelocation + '.svg');
                this.storageRef.getDownloadURL().then(url => {
                    fetch(url).then(response => response.text())
                        .then(d => {
                            this.barcode = '<svg width="100%" height="auto " viewBox="0 0 25 25"' + d.split('<svg')[1];
                            document.getElementById('barcode')!.innerHTML = this.barcode;
                        });
                });
            });
    }

    onCancelClick(): void {
        if (confirm('Sind Sie sicher, dass Sie den Termin am ' + this.date + ' um ' + this.time + ' stornieren wollen?')) {
            this.firestore.collection('Registrations').doc(this.id).delete();
            this.router.navigateByUrl('/appointment/cancelled');
        }
    }

    onDownloadClick(): void {
        this.storageRef = firebase.storage().ref('registration-pdf/' + this.id + '.pdf');
        this.storageRef?.getDownloadURL().then(url => {
            window.open(url);
        });
    }
}
