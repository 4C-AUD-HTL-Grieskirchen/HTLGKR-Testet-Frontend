import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';

@Component({
    selector: 'app-registration-start',
    templateUrl: './registration-start.component.html',
    styleUrls: ['./registration-start.component.css']
})
export class RegistrationStartComponent implements OnInit {

    inputBirthday: string | undefined;

    constructor(public dataProvider: RegistrationDataProviderService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const params = this.route.snapshot.params;

        this.dataProvider.getRegistration(params.id).then(value => {
            if (value === undefined) {
                alert('Wrong id');
            }
        });
    }

    submit(): void {

        const date = this.inputBirthday?.split('.').reverse().join('-');

        if (this.inputBirthday && Date.parse(date ?? '') === Date.parse(this.dataProvider.data.birthdate ?? '')){
            this.router.navigate(['registration/station']);
        }
        else {
            alert('Wrong birthday');
        }
    }
}
