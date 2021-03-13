import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTimeComponent } from './registration-time.component';

describe('RegistrationTimeComponent', () => {
  let component: RegistrationTimeComponent;
  let fixture: ComponentFixture<RegistrationTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
