import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadtableHeaderFeaturesComponent } from './leadtable-header-features.component';

describe('LeadtableHeaderFeaturesComponent', () => {
  let component: LeadtableHeaderFeaturesComponent;
  let fixture: ComponentFixture<LeadtableHeaderFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadtableHeaderFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadtableHeaderFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
