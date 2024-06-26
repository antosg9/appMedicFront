import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSignalementComponent } from './add-signalement.component';

describe('AddSignalementComponent', () => {
  let component: AddSignalementComponent;
  let fixture: ComponentFixture<AddSignalementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSignalementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSignalementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
