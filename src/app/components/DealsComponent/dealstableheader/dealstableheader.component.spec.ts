import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealstableheaderComponent } from './dealstableheader.component';

describe('DealstableheaderComponent', () => {
  let component: DealstableheaderComponent;
  let fixture: ComponentFixture<DealstableheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealstableheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealstableheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
