import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatRecordComponent } from './combat-record.component';

describe('CombatRecordComponent', () => {
  let component: CombatRecordComponent;
  let fixture: ComponentFixture<CombatRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
