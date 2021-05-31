import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';

@Component({
    selector: 'app-registration-start',
    templateUrl: './registration-start.component.html',
    styleUrls: ['./registration-start.component.css']
})
export class RegistrationStartComponent implements OnInit {

    inputBirthday: string | undefined;

    constructor(public dataProvider: RegistrationDataProviderService, private router: Router) {
    }

    ngOnInit(): void {

    }

    submit(): void {

        if (this.inputBirthday && this.inputBirthday === this.dataProvider.data.birthdate){
            this.router.navigate(['registration/station']);
        }
        else {
            alert('Wrong birthday');
        }
    }
}
