import {Injectable} from '@angular/core';
import {RegistrationData} from '../models/RegistrationData';
import {AngularFirestore} from '@angular/fire/firestore';
import {TestingFacility} from '../models/TestingFacility';

@Injectable({
    providedIn: 'root'
})
export class RegistrationDataProviderService {

    public selectedFacility: TestingFacility | undefined;

    public data: RegistrationData;

    constructor(private fire: AngularFirestore) {
        this.data = new RegistrationData();
    }

    public submitRegistration(): void {

        this.fire.firestore.collection('registrations').add(this.data).then((r) => {

        });
    }

}
