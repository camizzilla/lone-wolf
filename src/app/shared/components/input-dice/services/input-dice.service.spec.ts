import { TestBed } from '@angular/core/testing';

import { InputDiceService } from './input-dice.service';

describe('InputDiceService', () => {
  let service: InputDiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputDiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
