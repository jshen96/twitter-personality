import { TestBed } from '@angular/core/testing';

import { PersonalityService } from './personality.service';

describe('PersonalityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalityService = TestBed.get(PersonalityService);
    expect(service).toBeTruthy();
  });
});
