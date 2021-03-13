import { Component, OnInit } from '@angular/core';
import {StepsCommunicationService} from '../../services/steps-communication.service';

@Component({
  selector: 'app-registration-start',
  templateUrl: './registration-start.component.html',
  styleUrls: ['./registration-start.component.css']
})
export class RegistrationStartComponent implements OnInit {

  constructor(private communication: StepsCommunicationService) {
  }

  ngOnInit(): void {
  }

    setSelectedDate(sDate: string): void{
        this.communication.userBirthday = new Date(Date.parse(sDate));
    }

}
