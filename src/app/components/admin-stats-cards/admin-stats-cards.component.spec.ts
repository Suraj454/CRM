import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatsCardsComponent } from './admin-stats-cards.component';

describe('AdminStatsCardsComponent', () => {
  let component: AdminStatsCardsComponent;
  let fixture: ComponentFixture<AdminStatsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStatsCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStatsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
