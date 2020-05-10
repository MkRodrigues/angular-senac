import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayEx2Component } from './two-way-ex2.component';

describe('TwoWayEx2Component', () => {
  let component: TwoWayEx2Component;
  let fixture: ComponentFixture<TwoWayEx2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayEx2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
