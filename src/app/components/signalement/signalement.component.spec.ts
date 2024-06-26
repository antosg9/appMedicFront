import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalementComponent } from './signalement.component';

describe('SignalementComponent', () => {
  let component: SignalementComponent;
  let fixture: ComponentFixture<SignalementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
