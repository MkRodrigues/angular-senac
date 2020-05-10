import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayEx1Component } from './two-way-ex1.component';

describe('TwoWayEx1Component', () => {
  let component: TwoWayEx1Component;
  let fixture: ComponentFixture<TwoWayEx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayEx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
