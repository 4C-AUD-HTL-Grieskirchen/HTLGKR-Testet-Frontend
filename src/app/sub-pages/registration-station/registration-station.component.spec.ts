import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RegistrationStationComponent} from './registration-station.component';

describe('RegistrationStationComponent', () => {
    let component: RegistrationStationComponent;
    let fixture: ComponentFixture<RegistrationStationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegistrationStationComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrationStationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
