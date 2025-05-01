import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealChartsComponent } from './deal-charts.component';

describe('DealChartsComponent', () => {
  let component: DealChartsComponent;
  let fixture: ComponentFixture<DealChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
