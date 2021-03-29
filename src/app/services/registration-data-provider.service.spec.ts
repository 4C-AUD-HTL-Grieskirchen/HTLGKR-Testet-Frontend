import { TestBed } from '@angular/core/testing';

import { RegistrationDataProviderService } from './registration-data-provider.service';

describe('RegistrationDataProviderService', () => {
  let service: RegistrationDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
