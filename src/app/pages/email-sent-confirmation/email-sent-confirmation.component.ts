import { Component, OnInit } from '@angular/core';
import {RegistrationDataProviderService} from '../../services/registration-data-provider.service';

@Component({
  selector: 'app-email-sent-confirmation',
  templateUrl: './email-sent-confirmation.component.html',
  styleUrls: ['./email-sent-confirmation.component.css']
})
export class EmailSentConfirmationComponent implements OnInit {

  constructor(private dataProvider: RegistrationDataProviderService) { }

  ngOnInit(): void {
  }

  getName(): string {
      return `${this.dataProvider.data.firstname} ${this.dataProvider.data.lastname}`;
  }

  getMail(): string {
      return `${this.dataProvider.data.email}`;
  }
}
