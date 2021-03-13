import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StepsCommunicationService} from '../../services/steps-communication.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.css']
})
export class RegistrationConfirmationComponent implements OnInit {

  constructor(private store: AngularFirestore, private router: Router, private communication: StepsCommunicationService) { }

  ngOnInit(): void {
  }
}
