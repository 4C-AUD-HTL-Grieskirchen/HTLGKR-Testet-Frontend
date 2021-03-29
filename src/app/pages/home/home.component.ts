import {Component, OnInit} from '@angular/core';
import {RegistrationData} from '../../models/RegistrationData';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    agreedTerms: boolean;
    data: RegistrationData;

    constructor(private dataProvider: RegistrationDataProviderService, private router: Router) {
        this.data = dataProvider.data;
        this.agreedTerms = false;
    }

    ngOnInit(): void {
    }

    submit(): void {
        console.log(this.dataProvider.data);
        this.router.navigate(['registration']);
    }

}
