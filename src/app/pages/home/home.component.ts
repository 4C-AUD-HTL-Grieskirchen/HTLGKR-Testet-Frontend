import {Component, OnInit} from '@angular/core';
import {RegistrationData} from '../../models/RegistrationData';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    agreedTerms: boolean;
    data: RegistrationData;

    constructor() {
        this.data = new RegistrationData();
        this.agreedTerms = false;
    }

    ngOnInit(): void {
    }

    submit(): void {
        console.log(this.data);
    }

}
