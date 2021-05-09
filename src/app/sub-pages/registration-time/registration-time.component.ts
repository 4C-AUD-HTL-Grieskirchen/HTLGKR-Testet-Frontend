import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';
import {dashCaseToCamelCase} from "@angular/compiler/src/util";

@Component({
    selector: 'app-registration-time',
    templateUrl: './registration-time.component.html',
    styleUrls: ['./registration-time.component.css']
})
export class RegistrationTimeComponent implements OnInit {




    constructor(public dataProvider: RegistrationDataProviderService, private router: Router) {
        this.timeSlotSelected();
        dataProvider.loadTimeDays();
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
        console.log(this.dataProvider.availableTimeSlots);
    }

    // ToDo: next button should call pdf creation and return number of "Laufzettel"
    submit(): void {
        this.router.navigate(['registration/confirmation']);
    }

    timeDayChanged(): void {
        this.dataProvider.loadTimeSlots();
    }
}
