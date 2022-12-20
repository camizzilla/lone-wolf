import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceKaiDisciplinesComponent } from './choice-kai-disciplines.component';

describe('ChoiceKaiDisciplinesComponent', () => {
  let component: ChoiceKaiDisciplinesComponent;
  let fixture: ComponentFixture<ChoiceKaiDisciplinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceKaiDisciplinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceKaiDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
