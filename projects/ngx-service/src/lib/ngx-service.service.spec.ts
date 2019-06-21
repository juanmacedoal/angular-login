import { TestBed } from '@angular/core/testing';

import { NgxServiceService } from './ngx-service.service';

describe('NgxServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxServiceService = TestBed.get(NgxServiceService);
    expect(service).toBeTruthy();
  });
});
