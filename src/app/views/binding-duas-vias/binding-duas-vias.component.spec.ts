import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingDuasViasComponent } from './binding-duas-vias.component';

describe('BindingDuasViasComponent', () => {
  let component: BindingDuasViasComponent;
  let fixture: ComponentFixture<BindingDuasViasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingDuasViasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingDuasViasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
