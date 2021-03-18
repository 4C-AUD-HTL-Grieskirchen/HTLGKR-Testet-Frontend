import {Injectable} from '@angular/core';
import {District} from '../models/District';
import {TestingFacility} from '../models/TestingFacility';

@Injectable({
    providedIn: 'root'
})
export class StepsCommunicationService {

    public userBirthday: Date | undefined;
    public userDistrict: District | undefined;
    public selectedFacility: TestingFacility | undefined;
    public selectedDate: Date | undefined;

    constructor() {
    }
}
