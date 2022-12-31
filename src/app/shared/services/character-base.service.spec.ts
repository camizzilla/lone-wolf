import { TestBed } from '@angular/core/testing';

import { CharacterBaseService } from './character-base.service';

describe('CharacterBaseService', () => {
  let service: CharacterBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
