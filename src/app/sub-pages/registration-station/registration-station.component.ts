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

    districts: string[];
    screeningStations: Screeningstation[];
    selectedDistrict = '';

    constructor(public dataProvider: RegistrationDataProviderService, private router: Router) {



        this.screeningStations = dataProvider.availableScreeningStations;

        const distinct = new Set<string>();

        for (const station of this.screeningStations) {
            distinct.add(station.district);
        }

        this.districts = [...distinct];

    }

    ngOnInit(): void {
    }

    districtSelected(): void {
        // TODO:  Filter testing facilities ...
    }

    submit(): void {
        this.router.navigate(['registration/time']);
    }
}
