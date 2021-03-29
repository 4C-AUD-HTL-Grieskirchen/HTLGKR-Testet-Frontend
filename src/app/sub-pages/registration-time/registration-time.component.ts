import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';
import {RegistrationData} from '../../models/RegistrationData';

@Component({
    selector: 'app-registration-time',
    templateUrl: './registration-time.component.html',
    styleUrls: ['./registration-time.component.css']
})
export class RegistrationTimeComponent implements OnInit {

    selectedFacility: string | undefined;
    availableDates: string[];
    selectedDate: string;
    availableTimes: string[];
    selectedTime: string;

    constructor(public dataProvider: RegistrationDataProviderService) {

        this.availableDates = ['NOW']; // ToDo: changed to await with db get
        this.selectedDate = this.availableDates[0];
        this.availableTimes = this.getTimesFromSelectedDate();
        this.selectedTime = this.availableTimes[0];

        this.timeSlotSelected();
    }

    ngOnInit(): void {
    }

    getParsedDate(date: Date): string {
        let returnString = '';

        const dayOfWeek = date.getDay();
        returnString += isNaN(dayOfWeek) ? null : ['Sonntag, ', 'Montag, ', 'Dienstag, ', 'Mittwoch, ', 'Donnerstag, ', 'Freitag, ', 'Samstag, '][dayOfWeek];

        returnString += date.getUTCDate() + '.';
        returnString += date.getUTCMonth() + '.';
        returnString += date.getUTCFullYear();

        return returnString;
    }

    getTimesFromSelectedDate(): string[] {
        return []; // ToDo: get from db with selectedDate
    }

    timeSlotSelected(): void {
        if (!this.selectedDate || !this.selectedTime) {
            return;
        }

        this.dataProvider.data.selectedTimeslot = this.selectedDate + this.selectedTime; // TODO: parse it ... to ISO date
        // this.selectedDate.setUTCHours(+this.selectedTime.split(':')[0], +this.selectedTime.split(':')[1]);
        // this.communication.selectedDate = this.selectedDate;
    }

    // ToDo: next button should call pdf creation and return number of "Laufzettel"
}
