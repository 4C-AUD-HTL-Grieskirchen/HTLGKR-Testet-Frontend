import {Injectable} from '@angular/core';
import {RegistrationData} from '../models/RegistrationData';
import {AngularFirestore} from '@angular/fire/firestore';
import {Screeningstation} from '../models/Screeningstation';
import {TimeDay} from "../models/TimeDay";
import {TimeSlot} from "../models/TimeSlot";

@Injectable({
    providedIn: 'root'
})
export class RegistrationDataProviderService {

    public selectedScreeningStation: Screeningstation | undefined;

    public selectedTimeDay: TimeDay | undefined;

    public availableScreeningStations: Screeningstation[];

    public availableTimeSlots: TimeSlot[];

    public availableTimeDays: TimeDay[];

    public data: RegistrationData;

    constructor(private fire: AngularFirestore) {
        this.data = new RegistrationData();
        this.availableScreeningStations = [];
        this.availableTimeDays = [];
        this.availableTimeSlots = [];
        this.loadScreeningStations();
    }

    public submitRegistration(): void {

        this.fire.firestore.collection('registrations').add(this.data).then((r) => {

        });
    }


    loadScreeningStations(): void {
        this.fire.firestore.collection('ScreeningStations').get().then(value => {

            this.availableScreeningStations = [];
            value.forEach(result => {
                const station = result.data() as Screeningstation;
                station.id = result.id;

                this.availableScreeningStations.push(station);
            });

        });

    }

    loadTimeDays(): void {
        if (this.selectedScreeningStation === undefined) {
            return;
        }

        const stationId = this.selectedScreeningStation.id;

        this.fire.firestore.collection(`ScreeningStations/${stationId}/timeDays`).get().then(value => {

            this.availableTimeDays = [],

                value.forEach(result => {
                    const timeDay = result.data() as TimeDay;
                    timeDay.id = result.id;

                    this.availableTimeDays.push(timeDay);
                });
        });

    }

    loadTimeSlots(): void {

        if (this.selectedTimeDay === undefined) {
            return;
        }
        if (this.selectedScreeningStation === undefined) {
            return;
        }

        console.log("lolol");

        const stationId = this.selectedScreeningStation.id;
        const timeDayId = this.selectedTimeDay.id;

        const path = `ScreeningStations/${stationId}/timeDays/${timeDayId}/slots`;

        console.log(path);

        this.fire.firestore.collection(path).get().then(value => {
            this.availableTimeSlots = [];
            console.log(value);
            value.forEach(result => {
                console.log(result);
                const timeSlot = result.data() as TimeSlot;
                timeSlot.id = result.id;
                console.log(result);
                this.availableTimeSlots.push(timeSlot);
            });
        });
    }

}
