import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadcardsComponent } from './leadcards.component';

describe('LeadcardsComponent', () => {
  let component: LeadcardsComponent;
  let fixture: ComponentFixture<LeadcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadcardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
