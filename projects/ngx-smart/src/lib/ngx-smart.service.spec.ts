import { TestBed } from '@angular/core/testing';

import { NgxSmartService } from './ngx-smart.service';

describe('NgxSmartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSmartService = TestBed.get(NgxSmartService);
    expect(service).toBeTruthy();
  });
});
