import { TestBed } from '@angular/core/testing';

import { SalesLeadsService } from './sales-leads.service';

describe('SalesLeadsService', () => {
  let service: SalesLeadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesLeadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
