import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadChartsComponent } from './lead-charts.component';

describe('LeadChartsComponent', () => {
  let component: LeadChartsComponent;
  let fixture: ComponentFixture<LeadChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
