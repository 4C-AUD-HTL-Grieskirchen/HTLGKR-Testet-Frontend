import {Injectable} from '@angular/core';
import {RegistrationData} from '../models/RegistrationData';

@Injectable({
    providedIn: 'root'
})
export class RegistrationDataProviderService {

    public data: RegistrationData;

    constructor() {
        this.data = new RegistrationData();
    }
}
