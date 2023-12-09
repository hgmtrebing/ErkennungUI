import { TestBed } from '@angular/core/testing';

import { DeterminerQuizService } from './determiner-quiz.service';

describe('DeterminerQuizService', () => {
  let service: DeterminerQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeterminerQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
