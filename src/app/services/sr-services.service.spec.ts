import { TestBed } from '@angular/core/testing';

import { SRService } from './sr-services.service';

describe('SrServicesService', () => {
  let service: SRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
