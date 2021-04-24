import {Component, OnInit} from '@angular/core';
import {RegistrationData} from '../../models/RegistrationData';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';
import {Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

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

    get firstname(): AbstractControl {
        return this.registrationForm.get('firstname') as AbstractControl;
    }

    get lastname(): AbstractControl {
        return this.registrationForm.get('lastname') as AbstractControl;
    }

    get birthdate(): AbstractControl {
        return this.registrationForm.get('birthdate') as AbstractControl;
    }

    get gender(): AbstractControl {
        return this.registrationForm.get('gender') as AbstractControl;
    }

    get street(): AbstractControl {
        return this.registrationForm.get('street') as AbstractControl;
    }

    get house(): AbstractControl {
        return this.registrationForm.get('house') as AbstractControl;
    }

    get door(): AbstractControl {
        return this.registrationForm.get('door') as AbstractControl;
    }

    get stair(): AbstractControl {
        return this.registrationForm.get('stair') as AbstractControl;
    }

    get plz(): AbstractControl {
        return this.registrationForm.get('plz') as AbstractControl;
    }

    get location(): AbstractControl {
        return this.registrationForm.get('location') as AbstractControl;
    }

    get email(): AbstractControl {
        return this.registrationForm.get('email') as AbstractControl;
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
