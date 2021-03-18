import {Component, OnInit} from '@angular/core';
import {District} from '../../models/District';
import {TestingFacility} from '../../models/TestingFacility';
import {StepsCommunicationService} from '../../services/steps-communication.service';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
    selector: 'app-registration-station',
    templateUrl: './registration-station.component.html',
    styleUrls: ['./registration-station.component.css']
})
export class RegistrationStationComponent implements OnInit {

    districts: District[] = []; // ToDo: get data from db
    testingFacilities: TestingFacility[] = []; // ToDo: get data from db
    selectedDistrict: District | undefined; // ToDo: set first district automatically
    selectedFacility: TestingFacility | undefined;

    // maybe search for nearest district and/or facility

    constructor(private store: AngularFirestore, private communication: StepsCommunicationService, private router: Router) {
    }

    ngOnInit(): void {
    }

    anySelectionChanged(): void {
        if (this.selectedFacility) {
            this.communication.selectedFacility = this.selectedFacility;
        }
        if (this.selectedDistrict) {
            this.communication.userDistrict = this.selectedDistrict;
        }
    }

    onClickNext(): void {
        this.router.navigate(['registration/time']);
    }

    onClickBack(): void {
        this.router.navigate(['registration/start']);
    }
}
