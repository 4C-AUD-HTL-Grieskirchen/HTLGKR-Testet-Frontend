import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration-steps',
    templateUrl: './registration-steps.component.html',
    styleUrls: ['./registration-steps.component.css']
})
export class RegistrationStepsComponent implements OnInit {

    steps: MenuItem[];
    currentStep: number;

    constructor(private router: Router) {
        this.currentStep = -1;
        this.steps = [
            {
                label: 'Step 1',
                routerLink: 'start',
                icon: 'pi pi-plus',
                tabindex: '0'
            },
            {
                label: 'Step 2',
                routerLink: 'station',
                tabindex: '1'
            },
            {
                label: 'Step 3',
                routerLink: 'time',
                tabindex: '2'
            },
            {
                label: 'Step 4',
                routerLink: 'confirmation',
                tabindex: '3'
            },
        ];

    }


    onActivate($event: any): void {
        console.log($event);
    }

    ngOnInit(): void {
        this.currentStep = 0;
        this.router.navigate(['registration/start']);
    }

    onClickNext(): void {
        this.currentStep++;
        this.router.navigate(['registration/' + this.steps[this.currentStep].routerLink]);
    }

    onClickBack(): void {
        this.currentStep--;
        this.router.navigate(['registration/' + this.steps[this.currentStep].routerLink]);
    }

}
