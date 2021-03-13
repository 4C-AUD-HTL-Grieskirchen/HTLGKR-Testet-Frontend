import { Component, OnInit } from '@angular/core';
import {StepsCommunicationService} from '../../services/steps-communication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-start',
  templateUrl: './registration-start.component.html',
  styleUrls: ['./registration-start.component.css']
})
export class RegistrationStartComponent implements OnInit {

  constructor(private communication: StepsCommunicationService, private router: Router) {
  }

  ngOnInit(): void {
  }

    setSelectedDate(sDate: string): void{
        this.communication.userBirthday = new Date(Date.parse(sDate));
    }
    onClickNext(): void{
        this.router.navigate(['registration/station']);
    }
}
