import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningstationItemComponent } from './screeningstation-item.component';

describe('ScreeningstationItemComponent', () => {
  let component: ScreeningstationItemComponent;
  let fixture: ComponentFixture<ScreeningstationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningstationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningstationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
