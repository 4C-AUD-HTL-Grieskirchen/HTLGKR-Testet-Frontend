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

    isCanceled: boolean;

    registrationPdfCreated: boolean;
    resultPdfCreated: boolean

    emailSent: boolean;
    appointmentEmailSent: boolean;
    cancelEmailSent: boolean;

    barCodeScanned: boolean;
    result: string;

    constructor() {
        this.isTeacher = false;
        this.gender = 0;

        this.isCanceled = false;
        this.registrationPdfCreated = false;
        this.resultPdfCreated = false;
        this.emailSent = false;
        this.appointmentEmailSent = false;
        this.cancelEmailSent = false;
        this.barCodeScanned = false;
        this.result = 'unknown';
    }
}
