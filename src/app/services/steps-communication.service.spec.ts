import { TestBed } from '@angular/core/testing';

import { StepsCommunicationService } from './steps-communication.service';

describe('StepsCommunicationService', () => {
  let service: StepsCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepsCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
