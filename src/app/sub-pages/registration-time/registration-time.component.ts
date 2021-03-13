import {Component, OnInit} from '@angular/core';
import {TestingFacility} from '../../models/TestingFacility';
import {StepsCommunicationService} from '../../services/steps-communication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration-time',
    templateUrl: './registration-time.component.html',
    styleUrls: ['./registration-time.component.css']
})
export class RegistrationTimeComponent implements OnInit {

    selectedFacility: TestingFacility;
    availableDates: Date[];
    selectedDate: Date;
    availableTimes: string[];
    selectedTime: string;

    constructor(private communication: StepsCommunicationService, private router: Router) {
        this.selectedFacility = (communication.selectedFacility as TestingFacility);
        this.availableDates = []; // ToDo: changed to await with db get
        this.selectedDate = this.availableDates[0];
        this.availableTimes = this.getTimesFromSelectedDate();
        this.selectedTime = this.availableTimes[0];

        this.anySelectionChanged();
    }

    ngOnInit(): void {
    }

    onClickNext(): void {
        this.router.navigate(['registration/confirmation']);
    }

    onClickBack(): void {
        this.router.navigate(['registration/station']);
    }

    getParsedDate(date: Date): string {
        let returnString = '';

        const dayOfWeek = date.getDay();
        returnString += isNaN(dayOfWeek) ? null : ['Sunday, ', 'Monday, ', 'Tuesday, ', 'Wednesday, ', 'Thursday, ', 'Friday, ', 'Saturday, '][dayOfWeek];

        returnString += date.getUTCDate() + '.';
        returnString += date.getUTCMonth() + '.';
        returnString += date.getUTCFullYear();

        return returnString;
    }

    getTimesFromSelectedDate(): string[] {
        return []; // ToDo: get from db with selectedDate
    }

    anySelectionChanged(): void {
        if (!this.selectedDate || !this.selectedTime) {
            return;
        }
        this.selectedDate.setUTCHours(+this.selectedTime.split(':')[0], +this.selectedTime.split(':')[1]);
        this.communication.selectedDate = this.selectedDate;
    }

    // ToDo: next button should call pdf creation and return number of "Laufzettel"
}
