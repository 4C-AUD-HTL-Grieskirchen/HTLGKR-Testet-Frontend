import {District} from './District';

export class RegistrationData {

    isTeacher: boolean;

    firstname: string | undefined;
    lastname: string | undefined;
    birthdate: string | undefined;
    gender: number;
    social: string | undefined;

    street: string | undefined;
    house: string | undefined;
    door: string | undefined;
    stair: string | undefined;

    plz: string | undefined;
    location: string | undefined;
    email: string | undefined;

    selectedDistrict: string | undefined;
    selectedTimeslot: string | undefined;


    constructor() {
        this.isTeacher = false;
        this.gender = 2;
    }
}
