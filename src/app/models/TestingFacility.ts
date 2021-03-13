import {District} from './District';

export class TestingFacility {
    id: number;
    name: string;
    postalCode: number; // ToDo: rethink all props from models
    city: string;
    address: string;
    district: District;

    constructor(id: number, name: string, postalCode: number, city: string, address: string, district: District) {
        this.id = id;
        this.name = name;
        this.postalCode = postalCode;
        this.city = city;
        this.address = address;
        this.district = district;
    }

}
