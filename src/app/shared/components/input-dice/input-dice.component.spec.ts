import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDiceComponent } from './input-dice.component';

describe('InputDiceComponent', () => {
  let component: InputDiceComponent;
  let fixture: ComponentFixture<InputDiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
