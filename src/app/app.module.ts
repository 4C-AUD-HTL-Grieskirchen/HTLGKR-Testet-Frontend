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
import {AccordionModule} from 'primeng/accordion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationStartComponent } from './sub-pages/registration-start/registration-start.component';
import { RegistrationStationComponent } from './sub-pages/registration-station/registration-station.component';
import { RegistrationTimeComponent } from './sub-pages/registration-time/registration-time.component';
import { RegistrationConfirmationComponent } from './sub-pages/registration-confirmation/registration-confirmation.component';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {ListboxModule} from 'primeng/listbox';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegistrationStepsComponent,
        NavbarComponent,
        RegistrationStartComponent,
        RegistrationStationComponent,
        RegistrationTimeComponent,
        RegistrationConfirmationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        StepsModule,
        NgbModule,
        DropdownModule,
        FormsModule,
        ListboxModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
