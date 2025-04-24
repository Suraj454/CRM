import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesleadsComponent } from './salesleads.component';

describe('SalesleadsComponent', () => {
  let component: SalesleadsComponent;
  let fixture: ComponentFixture<SalesleadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesleadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
