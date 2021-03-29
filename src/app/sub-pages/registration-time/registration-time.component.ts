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

    data: RegistrationData;

    selectedFacility: string;
    availableDates: string[];
    selectedDate: string;
    availableTimes: string[];
    selectedTime: string;

    constructor(private store: AngularFirestore, private dataProvider: RegistrationDataProviderService, private router: Router) {

        this.data = dataProvider.data;

        this.selectedFacility = 'none';
        this.availableDates = ['NOW']; // ToDo: changed to await with db get
        this.selectedDate = this.availableDates[0];
        this.availableTimes = this.getTimesFromSelectedDate();
        this.selectedTime = this.availableTimes[0];

        this.anySelectionChanged();
    }

    ngOnInit(): void {
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
        // this.selectedDate.setUTCHours(+this.selectedTime.split(':')[0], +this.selectedTime.split(':')[1]);
        // this.communication.selectedDate = this.selectedDate;
    }

    // ToDo: next button should call pdf creation and return number of "Laufzettel"
}
