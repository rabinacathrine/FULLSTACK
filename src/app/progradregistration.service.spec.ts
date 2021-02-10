import { TestBed } from '@angular/core/testing';

import { ProgradregistrationService } from './progradregistration.service';

describe('ProgradregistrationService', () => {
  let service: ProgradregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgradregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
