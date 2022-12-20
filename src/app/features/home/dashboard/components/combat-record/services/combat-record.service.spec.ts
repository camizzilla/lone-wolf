import { TestBed } from '@angular/core/testing';

import { CombatRecordService } from './combat-record.service';

describe('CombatRecordService', () => {
  let service: CombatRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombatRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
