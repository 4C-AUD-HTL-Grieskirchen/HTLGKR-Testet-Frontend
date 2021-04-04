import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';

@Component({
    selector: 'app-registration-confirmation',
    templateUrl: './registration-confirmation.component.html',
    styleUrls: ['./registration-confirmation.component.css']
})
export class RegistrationConfirmationComponent implements OnInit {

    constructor(public dataProvider: RegistrationDataProviderService, private router: Router) {
    }

    ngOnInit(): void {
    }


}
