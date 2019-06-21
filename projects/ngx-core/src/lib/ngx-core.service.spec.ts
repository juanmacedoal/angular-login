import { TestBed } from '@angular/core/testing';

import { NgxCoreService } from './ngx-core.service';

describe('NgxCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCoreService = TestBed.get(NgxCoreService);
    expect(service).toBeTruthy();
  });
});
