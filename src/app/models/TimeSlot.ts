export class TimeSlot {
    date: string;
    maxUserAmount: number;
    userAmount: number;

    constructor(date: string, maxUserAmount: number, userAmount: number) {
        this.date = date;
        this.maxUserAmount = maxUserAmount;
        this.userAmount = userAmount;
    }
}
