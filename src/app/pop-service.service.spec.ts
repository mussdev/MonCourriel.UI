import { TestBed } from '@angular/core/testing';

import { PopServiceService } from './pop-service.service';

describe('PopServiceService', () => {
  let service: PopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
