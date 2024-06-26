import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsByYearComponent } from './analytics-by-year.component';

describe('AnalyticsByYearComponent', () => {
  let component: AnalyticsByYearComponent;
  let fixture: ComponentFixture<AnalyticsByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyticsByYearComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
