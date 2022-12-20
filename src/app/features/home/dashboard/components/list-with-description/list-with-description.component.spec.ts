import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithDescriptionComponent } from './list-with-description.component';

describe('ListWithDescriptionComponent', () => {
  let component: ListWithDescriptionComponent;
  let fixture: ComponentFixture<ListWithDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
