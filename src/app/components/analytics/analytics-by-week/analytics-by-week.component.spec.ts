import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByWeekComponent } from './analytics-by-week.component';

describe('AnalyticsByWeekComponent', () => {
  let component: AnalyticsByWeekComponent;
  let fixture: ComponentFixture<AnalyticsByWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyticsByWeekComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsByWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
