import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RegistrationStepsComponent} from './pages/registration-steps/registration-steps.component';

import {RegistrationStartComponent} from './sub-pages/registration-start/registration-start.component';
import {RegistrationStationComponent} from './sub-pages/registration-station/registration-station.component';
import {RegistrationTimeComponent} from './sub-pages/registration-time/registration-time.component';
import {RegistrationConfirmationComponent} from './sub-pages/registration-confirmation/registration-confirmation.component';

const routes: Routes = [

    {path: '', component: HomeComponent},
    {
        path: 'registration', component: RegistrationStepsComponent, children: [
            {path: 'start', component: RegistrationStartComponent},
            {path: 'station', component: RegistrationStationComponent},
            {path: 'time', component: RegistrationTimeComponent},
            {path: 'confirmation', component: RegistrationConfirmationComponent},
        ]
    },


    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
