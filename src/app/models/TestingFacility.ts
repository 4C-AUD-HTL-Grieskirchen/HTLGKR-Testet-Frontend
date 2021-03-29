import {TimeSlot} from './TimeSlot';

export class TestingFacility {

    id: string | undefined;

    name: string;
    postalCode: number;
    city: string;
    address: string;
    district: string;
    maxUserPerTimeslot: number;
    openingHours: string;
    timeSlots: TimeSlot[];

    constructor(name: string, postalCode: number, city: string, address: string, district: string,
                maxUserPerTimeslot: number, openingHours: string, timeSlots: TimeSlot[]) {

        this.name = name;
        this.postalCode = postalCode;
        this.city = city;
        this.address = address;
        this.district = district;
        this.maxUserPerTimeslot = maxUserPerTimeslot;
        this.openingHours = openingHours;
        this.timeSlots = timeSlots;
    }

}
