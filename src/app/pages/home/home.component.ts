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
    terms: boolean;
    genders: string[] = ['Weiblich', 'Männlich', 'Divers'];
    socialNumDate: string | undefined;

    constructor(private dataProvider: RegistrationDataProviderService, private router: Router) {
        this.registrationForm = new FormGroup({});
        this.dataProvider.data = dataProvider.data;
        this.terms = false;
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
            social: new FormControl(this.dataProvider.data.social, Validators.required),
            socialDate: new FormControl(this.socialNumDate),
            street: new FormControl(this.dataProvider.data.street, Validators.required),
            house: new FormControl(this.dataProvider.data.house, Validators.required),
            door: new FormControl(this.dataProvider.data.door),
            stair: new FormControl(this.dataProvider.data.stair),
            plz: new FormControl(this.dataProvider.data.plz, Validators.required),
            location: new FormControl(this.dataProvider.data.location, Validators.required),
            email: new FormControl(this.dataProvider.data.email, Validators.required),
            isTeacher: new FormControl(this.dataProvider.data.isTeacher),
            agreedTerms: new FormControl(this.terms, Validators.required)
        });
    }

    submit(): void {
        console.log(this.dataProvider.data);

        if (this.registrationForm.valid && this.agreedTerms.value) {
            this.router.navigate(['registration']);

        } else {
            this.registrationForm.markAllAsTouched();
        }
    }

    birthdateBlur(): void {
        if (this.birthdate.valid) {
            const date = Array.from(this.birthdate.value);
            date.splice(2, 1);
            date.splice(4, 3);
            this.socialDate.setValue(date);
        }
    }
}
