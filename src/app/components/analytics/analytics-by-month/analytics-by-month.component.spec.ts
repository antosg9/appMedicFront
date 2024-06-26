import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByMonthComponent } from './analytics-by-month.component';

describe('AnalyticsByMonthComponent', () => {
  let component: AnalyticsByMonthComponent;
  let fixture: ComponentFixture<AnalyticsByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyticsByMonthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
