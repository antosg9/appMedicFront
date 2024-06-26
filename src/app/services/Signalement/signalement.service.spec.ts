import { TestBed } from '@angular/core/testing';

import { SignalementService } from './signalement.service';
import { HttpClientModule } from '@angular/common/http';

describe('SignalementService', () => {
  let service: SignalementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SignalementService],
    });
    service = TestBed.inject(SignalementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
