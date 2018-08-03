import { TestBed, inject } from '@angular/core/testing';

import { TutorialServiceService } from './tutorial-service.service';

describe('TutorialServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorialServiceService]
    });
  });

  it('should be created', inject([TutorialServiceService], (service: TutorialServiceService) => {
    expect(service).toBeTruthy();
  }));
});
