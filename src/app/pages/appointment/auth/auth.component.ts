import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    public dateInput: string;

    private id = '';

    constructor(
        private firestore: AngularFirestore,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.dateInput = '';
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
    }

    onConfirmClick(): void {
        this.firestore.collection('Registrations').doc(this.id).get().subscribe(doc => {
            const data: any = doc.data();
            const birthdate = this.dateInput.split('.').reverse().join('-');
            const birthdateIso = birthdate + 'T00:00:00.000Z';

            if (data === undefined) {
                console.log('File not found!');
                alert('Es konnte keine Registrierung mit der angegebenen ID gefunden werden!');
                this.router.navigateByUrl('/');
                return;
            }

            if (data.birthdate.split('T')[0] === birthdate) {
                console.log('Redirecting...');
                localStorage.setItem('auth-birth', birthdateIso);
                this.router.navigateByUrl('/appointment/details/' + this.id);
            } else {
                console.log('Expected: ', data.birthdate.split('T')[0]);
                console.log('Selected: ', birthdate);
                console.log('Birthdate invalid!');
                alert('Das angegebene Geburtsdatum stimmt nicht mit unseren Daten überein!');
            }
        });
    }

}
