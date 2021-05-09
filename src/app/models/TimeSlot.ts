export class TimeSlot {

    id: string;
    time: string;

    maxUserAmount: number;
    userAmount: number;


    constructor(id: string, time: string, maxUserAmount: number, userAmount: number) {
        this.id = id;
        this.time = time;
        this.maxUserAmount = maxUserAmount;
        this.userAmount = userAmount;
    }
}
