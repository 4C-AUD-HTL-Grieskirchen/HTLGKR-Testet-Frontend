import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {StepsModule} from 'primeng/steps';
import {RegistrationStepsComponent} from './pages/registration-steps/registration-steps.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {FooterComponent} from './shared/footer/footer.component';
import {ImpressumComponent} from './pages/impressum/impressum.component';
import {RegistrationStartComponent} from './sub-pages/registration-start/registration-start.component';
import {RegistrationStationComponent} from './sub-pages/registration-station/registration-station.component';
import {RegistrationTimeComponent} from './sub-pages/registration-time/registration-time.component';
import {RegistrationConfirmationComponent} from './sub-pages/registration-confirmation/registration-confirmation.component';

import {ListboxModule} from 'primeng/listbox';
import { ScreeningstationItemComponent } from './shared/screeningstation-item/screeningstation-item.component';
import { AuthComponent } from './pages/appointment/auth/auth.component';
import { DetailsComponent } from './pages/appointment/details/details.component';
import { CancelledComponent } from './pages/appointment/cancelled/cancelled.component';
import {CalendarModule} from "primeng/calendar";
import { EmailSentConfirmationComponent } from './pages/email-sent-confirmation/email-sent-confirmation.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        ImpressumComponent,
        RegistrationStepsComponent,
        NavbarComponent,
        RegistrationStartComponent,
        RegistrationStationComponent,
        RegistrationTimeComponent,
        RegistrationConfirmationComponent,
        ScreeningstationItemComponent,
        AuthComponent,
        DetailsComponent,
        CancelledComponent,
        EmailSentConfirmationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        StepsModule,
        NgbModule,
        DropdownModule,
        FormsModule,
        ListboxModule,
        ButtonModule,
        NgbModule,
        InputMaskModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        DropdownModule,
        FontAwesomeModule,
        InputTextModule,
        CalendarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
