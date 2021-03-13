export class TimeSlot {
    date: Date; // ToDo: rethink all props from models
    userAmount: number;

    constructor(date: Date, userAmount: number) {
        this.date = date;
        this.userAmount = userAmount;
    }
}
