import {Component, OnInit} from '@angular/core';
import {TestingFacility} from '../../models/TestingFacility';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';


@Component({
    selector: 'app-registration-station',
    templateUrl: './registration-station.component.html',
    styleUrls: ['./registration-station.component.css']
})
export class RegistrationStationComponent implements OnInit {

    districts: string[]; // ToDo: get data from db
    testingFacilities: TestingFacility[] = []; // ToDo: get data from db
    selectedFacility: TestingFacility | undefined;
    selectedDistrict = '';

    constructor(public dataProvider: RegistrationDataProviderService) {

        this.districts = ['gamingland', 'phils haus'];

        this.testingFacilities = [new TestingFacility( 'bled', -1, 'city', 'address', 'bled2', 1, 'bled', [])];

    }

    ngOnInit(): void {
    }

    districtSelected(): void {
        // TODO:  Filter testing facilities ...
    }

    facilityChanged(): void {
        if (this.selectedFacility === undefined) { return; }
        this.dataProvider.data.selectedFacility = this.selectedFacility.id;
    }
}
