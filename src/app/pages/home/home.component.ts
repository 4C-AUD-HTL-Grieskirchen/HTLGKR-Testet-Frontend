import {Component, OnInit} from '@angular/core';
import {RegistrationData} from '../../models/RegistrationData';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    registrationForm: FormGroup;
    data: RegistrationData;
    social: string | undefined;
    agreedTerms: boolean;

    constructor(private dataProvider: RegistrationDataProviderService, private router: Router) {
        this.registrationForm = new FormGroup({});
        this.data = dataProvider.data;
        this.agreedTerms = false;
    }

    get firstname(): FormControl {
        return this.registrationForm.get('firstname') as FormControl;
    }

    get lastname(): FormControl {
        return this.registrationForm.get('lastname') as FormControl;
    }

    get birthdate(): FormControl {
        return this.registrationForm.get('birthdate') as FormControl;
    }

    get gender(): FormControl {
        return this.registrationForm.get('gender') as FormControl;
    }

    get street(): FormControl {
        return this.registrationForm.get('street') as FormControl;
    }

    get house(): FormControl {
        return this.registrationForm.get('house') as FormControl;
    }

    get door(): FormControl {
        return this.registrationForm.get('door') as FormControl;
    }

    get stair(): FormControl {
        return this.registrationForm.get('stair') as FormControl;
    }

    get plz(): FormControl {
        return this.registrationForm.get('plz') as FormControl;
    }

    get location(): FormControl {
        return this.registrationForm.get('location') as FormControl;
    }

    get email(): FormControl {
        return this.registrationForm.get('email') as FormControl;
    }

    get isTeacher(): FormControl {
        return this.registrationForm.get('isTeacher') as FormControl;
    }

    ngOnInit(): void {
        this.registrationForm = new FormGroup({
            firstname: new FormControl(this.data.firstname, Validators.required),
            lastname: new FormControl(this.data.lastname, Validators.required),
            birthdate: new FormControl(this.data.birthdate, Validators.required),
            gender: new FormControl(this.data.gender, Validators.required),
            street: new FormControl(this.data.street, Validators.required),
            house: new FormControl(this.data.house, Validators.required),
            door: new FormControl(this.data.door),
            stair: new FormControl(this.data.stair),
            plz: new FormControl(this.data.plz, Validators.required),
            location: new FormControl(this.data.location, Validators.required),
            email: new FormControl(this.data.email, Validators.required),
            isTeacher: new FormControl(this.data.isTeacher)
        });
    }

    submit(): void {
        console.log(this.dataProvider.data);
        this.router.navigate(['registration']);
    }

}
