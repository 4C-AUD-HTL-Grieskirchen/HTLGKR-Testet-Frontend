import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepsCommunicationService {

    public userBirthday: Date | undefined;

  constructor() { }
}
