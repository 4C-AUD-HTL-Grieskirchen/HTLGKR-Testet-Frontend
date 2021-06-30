import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RegistrationStepsComponent} from './pages/registration-steps/registration-steps.component';
import {ImpressumComponent} from './pages/impressum/impressum.component';

import {RegistrationStartComponent} from './sub-pages/registration-start/registration-start.component';
import {RegistrationStationComponent} from './sub-pages/registration-station/registration-station.component';
import {RegistrationTimeComponent} from './sub-pages/registration-time/registration-time.component';
import {RegistrationConfirmationComponent} from './sub-pages/registration-confirmation/registration-confirmation.component';
import {AuthComponent} from './pages/appointment/auth/auth.component';
import {DetailsComponent} from './pages/appointment/details/details.component';
import {CancelledComponent} from './pages/appointment/cancelled/cancelled.component';

const routes: Routes = [

    {path: '', component: HomeComponent},
    {
        path: 'registration', component: RegistrationStepsComponent, children: [
            {path: 'start/:id', component: RegistrationStartComponent},
            {path: 'station', component: RegistrationStationComponent},
            {path: 'time', component: RegistrationTimeComponent},
            {path: 'confirmation', component: RegistrationConfirmationComponent},
        ],
    },
    {
        path: 'appointment', children: [
            {path: 'auth/:id', component: AuthComponent},
            {path: 'details/:id', component: DetailsComponent},
            {path: 'cancelled', component: CancelledComponent},
            {path: '**', pathMatch: 'full', redirectTo: '/'}
        ],
    },

    {path: 'impressum', component: ImpressumComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
