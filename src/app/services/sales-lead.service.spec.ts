import { TestBed } from '@angular/core/testing';

import { SalesLeadService } from './sales-lead.service';

describe('SalesLeadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesLeadService = TestBed.get(SalesLeadService);
    expect(service).toBeTruthy();
  });
});
