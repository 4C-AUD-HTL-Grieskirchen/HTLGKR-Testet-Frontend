import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RegistrationStartComponent} from './sub-pages/registration-start/registration-start.component';

const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'steps/start', component: RegistrationStartComponent},

    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
