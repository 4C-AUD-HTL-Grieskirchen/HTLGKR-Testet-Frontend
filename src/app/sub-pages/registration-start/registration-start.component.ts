import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';


@Component({
    selector: 'app-registration-start',
    templateUrl: './registration-start.component.html',
    styleUrls: ['./registration-start.component.css']
})
export class RegistrationStartComponent implements OnInit {



    constructor(public dataProvider: RegistrationDataProviderService, private router: Router) {


    }

    ngOnInit(): void {
        console.log(this.dataProvider.data.birthdate);
    }

    setSelectedDate(sDate: string): void {
        // this.communication.userBirthday = new Date(Date.parse(sDate));
    }

    submit(): void {
        this.router.navigate(['registration/station']);
    }
}
