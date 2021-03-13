import { Component, OnInit } from '@angular/core';
import {StepsCommunicationService} from '../../services/steps-communication.service';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.css']
})
export class RegistrationConfirmationComponent implements OnInit {

  constructor(private communication: StepsCommunicationService) { }

  ngOnInit(): void {
  }

}
