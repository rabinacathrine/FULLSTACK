import { TestBed } from '@angular/core/testing';

import { ProgradRegService } from './prograd-reg.service';

describe('ProgradRegService', () => {
  let service: ProgradRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgradRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
