import {Component, OnInit} from '@angular/core';
import {Screeningstation} from '../../models/Screeningstation';
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
    screeningstations: Screeningstation[] = []; // ToDo: get data from db
    selectedStation: Screeningstation | undefined;
    selectedDistrict = '';

    constructor(public dataProvider: RegistrationDataProviderService, private router: Router) {

        this.districts = ['gamingland', 'phils haus'];

        this.screeningstations = [new Screeningstation( 'Die Teststrasse der Teststrassen', 4600, 'Wels', 'Teststrasse 123', 'bled2', 1, 'bled', [])];

    }

    ngOnInit(): void {
    }

    districtSelected(): void {
        // TODO:  Filter testing facilities ...
    }

    stationChanged(): void {
        if (this.selectedStation === undefined) { return; }
        this.dataProvider.data.selectedFacility = this.selectedStation.id;
        this.dataProvider.selectedFacility = this.selectedStation;
    }

    submit(): void {
        this.router.navigate(['registration/time']);
    }
}
