import {Injectable} from '@angular/core';
import {RegistrationData} from '../models/RegistrationData';
import {AngularFirestore} from '@angular/fire/firestore';
import {Screeningstation} from '../models/Screeningstation';

@Injectable({
    providedIn: 'root'
})
export class RegistrationDataProviderService {

    public selectedFacility: Screeningstation | undefined;

    public data: RegistrationData;

    constructor(private fire: AngularFirestore) {
        this.data = new RegistrationData();
    }

    public submitRegistration(): void {

        this.fire.firestore.collection('registrations').add(this.data).then((r) => {

        });
    }

}
