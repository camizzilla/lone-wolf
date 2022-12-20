import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericBlockComponent } from './numeric-block.component';

describe('NumericBlockComponent', () => {
  let component: NumericBlockComponent;
  let fixture: ComponentFixture<NumericBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
