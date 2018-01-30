import { TestBed, inject } from '@angular/core/testing';

import { FuzzyLogicServiceService } from './fuzzy-logic-service.service';

describe('FuzzyLogicServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuzzyLogicServiceService]
    });
  });

  it('should be created', inject([FuzzyLogicServiceService], (service: FuzzyLogicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
