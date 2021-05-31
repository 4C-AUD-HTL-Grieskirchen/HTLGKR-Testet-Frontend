import {TimeSlot} from './TimeSlot';

export class Screeningstation {

    id: string | undefined;

    name: string;
    postalCode: number;
    city: string;
    address: string;
    district: string;
    maxUserPerTimeslot: number;
    openingHours: string;

    constructor(name: string, postalCode: number, city: string, address: string, district: string,
                maxUserPerTimeslot: number, openingHours: string) {

        this.name = name;
        this.postalCode = postalCode;
        this.city = city;
        this.address = address;
        this.district = district;
        this.maxUserPerTimeslot = maxUserPerTimeslot;
        this.openingHours = openingHours;
    }

}
