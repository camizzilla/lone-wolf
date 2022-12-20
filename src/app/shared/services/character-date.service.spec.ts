import { TestBed } from '@angular/core/testing';

import { CharacterDateService } from './character-date.service';

describe('CharacterDateService', () => {
  let service: CharacterDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
