export class TimeSlot {
    date: Date; // ToDo: rethink all props from models
    maxUserAmount: number;
    userAmount: number;

    constructor(date: Date, maxUserAmount: number, userAmount: number) {
        this.date = date;
        this.maxUserAmount = maxUserAmount;
        this.userAmount = userAmount;
    }
}
