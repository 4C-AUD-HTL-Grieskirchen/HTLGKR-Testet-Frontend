import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    public value: Date;

    private id = '';

    constructor(
        private firestore: AngularFirestore,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.value = new Date();
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
    }

    onConfirmClick(): void {
        this.firestore.collection('Registrations').doc(this.id).get().subscribe(doc => {
            const dateIso = this.value.toISOString();
            const data = doc.data();

            if (data === undefined) {
                console.log('File not found!');
                alert('Es konnte keine Registrierung mit der angegebenen ID gefunden werden!');
                this.router.navigateByUrl('/');
                return;
            }

            // @ts-ignore
            if (data.birthdate === dateIso) {
                console.log('Redirecting...');
                localStorage.setItem('auth-birth', dateIso);
                this.router.navigateByUrl('/appointment/details/' + this.id);
            } else {
                console.log('Birthdate invalid!');
                alert('Das angegebene Geburtsdatum stimmt nicht mit unseren Daten überein!');
            }
        });
    }

}
