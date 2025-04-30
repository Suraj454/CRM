import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsChartsComponent } from './leads-charts.component';

describe('LeadsChartsComponent', () => {
  let component: LeadsChartsComponent;
  let fixture: ComponentFixture<LeadsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadsChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
