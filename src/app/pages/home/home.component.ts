import {Component, OnInit} from '@angular/core';
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
    genders: object[] = [
        {id: 0, value: 'Divers'},
        {id: 1, value: 'Weiblich'},
        {id: 2, value: 'Männlich'},
    ];

    constructor(private dataProvider: RegistrationDataProviderService, private router: Router) {
        this.registrationForm = new FormGroup({});
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

    get social(): FormControl {
        return this.registrationForm.get('social') as FormControl;
    }

    get socialDate(): FormControl {
        return this.registrationForm.get('socialDate') as FormControl;
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

    get agreedTerms(): FormControl {
        return this.registrationForm.get('agreedTerms') as FormControl;
    }

    ngOnInit(): void {
        this.registrationForm = new FormGroup({
            firstname: new FormControl(this.dataProvider.data.firstname, Validators.required),
            lastname: new FormControl(this.dataProvider.data.lastname, Validators.required),
            birthdate: new FormControl(this.dataProvider.data.birthdate, Validators.required),
            gender: new FormControl(this.dataProvider.data.gender, Validators.required),
            social: new FormControl(this.dataProvider.data.social),
            socialDate: new FormControl(undefined),
            street: new FormControl(this.dataProvider.data.street, Validators.required),
            house: new FormControl(this.dataProvider.data.house, Validators.required),
            door: new FormControl(this.dataProvider.data.door),
            stair: new FormControl(this.dataProvider.data.stair),
            plz: new FormControl(this.dataProvider.data.plz, Validators.required),
            location: new FormControl(this.dataProvider.data.location, Validators.required),
            email: new FormControl(this.dataProvider.data.email, Validators.required),
            isTeacher: new FormControl(this.dataProvider.data.isTeacher),
            agreedTerms: new FormControl(false, Validators.required)
        });
    }

    submit(): void {
        if (this.registrationForm.valid && this.agreedTerms.value) {

            this.social.setValue(`${this.social.value}${this.socialDate.value}`);
            this.registrationForm.removeControl('socialDate');
            this.registrationForm.removeControl('agreedTerms');

            if (typeof (this.gender.value) === 'number') {
                this.gender.setValue(this.gender.value);
            } else {
                this.gender.setValue(this.gender.value.id);
            }

            // TODO: add necessary values for email-service


            Object.assign(this.dataProvider.data, this.registrationForm.value);

            this.dataProvider.submitRegistration();
            this.router.navigate(['registration']);

        } else {
            this.registrationForm.markAllAsTouched();

            if (!this.agreedTerms.value) {
                this.agreedTerms.setErrors(Validators.required);
            }
        }
    }

    birthdateBlur(): void {
        if (this.birthdate.valid) {
            const date = Array.from(this.birthdate.value);
            date.splice(2, 1);
            date.splice(4, 3);

            this.socialDate.setValue(date.toString().split(',').join(''));
        }
    }
}
