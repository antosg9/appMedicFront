import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListSignalementComponent } from './get-list-signalement.component';

describe('GetListSignalementComponent', () => {
  let component: GetListSignalementComponent;
  let fixture: ComponentFixture<GetListSignalementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetListSignalementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetListSignalementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
