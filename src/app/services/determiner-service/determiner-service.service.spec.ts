import { TestBed } from '@angular/core/testing';

import { DeterminerServiceService } from './determiner-service.service';

describe('ArticleServiceService', () => {
  let service: DeterminerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeterminerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
