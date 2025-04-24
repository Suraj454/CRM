import { TestBed } from '@angular/core/testing';
import { LeadservicesService } from './leadservices.service';

describe('LeadservicesService', () => {
  let service: LeadservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
