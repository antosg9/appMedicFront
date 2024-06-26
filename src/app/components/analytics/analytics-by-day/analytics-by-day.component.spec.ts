import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByDayComponent } from './analytics-by-day.component';

describe('AnalyticsByDayComponent', () => {
  let component: AnalyticsByDayComponent;
  let fixture: ComponentFixture<AnalyticsByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyticsByDayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
