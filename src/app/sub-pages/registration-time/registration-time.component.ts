import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';

@Component({
    selector: 'app-registration-time',
    templateUrl: './registration-time.component.html',
    styleUrls: ['./registration-time.component.css']
})
export class RegistrationTimeComponent implements OnInit {

    constructor(public dataProvider: RegistrationDataProviderService, private router: Router) {
        dataProvider.loadTimeDays();
    }

    ngOnInit(): void {

    }

    getParsedDate(date: Date | string): string {
        let returnString = '';
        let actualDate;

        actualDate = new Date(date);

        const dayOfWeek = actualDate.getDay();
        returnString += isNaN(dayOfWeek) ? null : ['Sonntag, ', 'Montag, ', 'Dienstag, ', 'Mittwoch, ', 'Donnerstag, ', 'Freitag, ', 'Samstag, '][dayOfWeek];

        returnString += actualDate.getUTCDate() + '.';
        returnString += actualDate.getUTCMonth() + '.';
        returnString += actualDate.getUTCFullYear();

        return returnString;
    }

    // ToDo: next button should call pdf creation and return number of "Laufzettel"
    submit(): void {
        if (!this.dataProvider.selectedTimeSlot || !this.dataProvider.selectedTimeDay){
            alert('Please select a timeslot');
            return;
        }

        this.dataProvider.submitRegistration();
        this.router.navigate(['registration/confirmation']);
    }

    timeDayChanged(): void {
        this.dataProvider.loadTimeSlots();
    }
}
