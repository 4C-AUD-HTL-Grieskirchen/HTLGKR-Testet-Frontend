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

    qrCodeUri: string | undefined;
    pdfUri: string | undefined;
    pdfNumber: number | undefined;

    selectedTimeslot: string | undefined;
    selectedFacility: string | undefined;

    constructor() {
        this.isTeacher = false;
        this.gender = 0;
    }
}
