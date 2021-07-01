import {Injectable} from '@angular/core';
import {RegistrationData} from '../models/RegistrationData';
import {AngularFirestore} from '@angular/fire/firestore';
import {Screeningstation} from '../models/Screeningstation';
import {TimeDay} from '../models/TimeDay';
import {TimeSlot} from '../models/TimeSlot';

@Injectable({
    providedIn: 'root'
})
export class RegistrationDataProviderService {

    private currentDocId = '';

    public selectedScreeningStation: Screeningstation | undefined;

    public selectedTimeDay: TimeDay | undefined;
    public selectedTimeSlot: TimeSlot | undefined;

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

    public setRegistrationId(id: string): void {
        this.currentDocId = id;
    }

    public submitRegistration(): void {
        console.log(this);
        console.log(this.data);

        console.log(this.selectedTimeDay);
        console.log(this.selectedScreeningStation);
        console.log(this.selectedTimeSlot);

        if (this.currentDocId !== '') {
            this.data.selectedFacility = this.fire.firestore.collection('Screeningstations').doc(this.selectedScreeningStation?.id);
            this.data.selectedTimeslot = this.selectedTimeSlot?.time;
            this.data.selectedTimeDay = this.selectedTimeDay?.date;

            this.fire.firestore.doc('Registrations/' + this.currentDocId).set(Object.assign({}, this.data));
            return;
        }

        this.fire.firestore.collection('Registrations').add(Object.assign({}, this.data)).then((r) => {

        });
    }

    public getRegistration(id: string): Promise<RegistrationData> {

        return new Promise<RegistrationData>(resolve => {
            this.fire.firestore.doc('Registrations/' + id).get().then(value => {
                this.data = value.data() as RegistrationData;
                resolve(this.data);
                console.log(this.data);
            });
        });
    }

    loadScreeningStations(force = false): Promise<null> {

        return new Promise(resolve => {

            if (!force && this.availableScreeningStations.length > 0) {
                resolve(null);
                return;
            }

            this.fire.firestore.collection('ScreeningStations').get().then(value => {

                this.availableScreeningStations = [];
                value.forEach(result => {
                    const station = result.data() as Screeningstation;
                    station.id = result.id;

                    this.availableScreeningStations.push(station);
                });
                resolve(null);
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

        const stationId = this.selectedScreeningStation.id;
        const timeDayId = this.selectedTimeDay.id;
        const path = `ScreeningStations/${stationId}/timeDays/${timeDayId}/slots`;

        this.fire.firestore.collection(path).get().then(value => {
            this.availableTimeSlots = [];

            value.forEach(result => {
                const timeSlot = result.data() as TimeSlot;
                timeSlot.id = result.id;

                this.availableTimeSlots.push(timeSlot);
            });
        });
    }

    public persistData(): void {

        const data = {
            currentDocId: this.currentDocId,
            selectedScreeningStation: this.selectedScreeningStation,
            selectedTimeDay: this.selectedTimeDay,
            selectedTimeSlot: this.selectedTimeSlot
        };

        localStorage.setItem('registration/data', JSON.stringify(data));

    }

    public restoreData(): void {

        if (this.currentDocId !== '') { return; }

        const stringData = localStorage.getItem('registration/data');

        if (stringData === null) { return; }

        const data = JSON.parse(stringData);

        console.log("Restored ", data);

        Object.assign(this, data);
    }

}
