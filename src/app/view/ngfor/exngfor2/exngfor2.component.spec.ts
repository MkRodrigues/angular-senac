import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exngfor2Component } from './exngfor2.component';

describe('Exngfor2Component', () => {
  let component: Exngfor2Component;
  let fixture: ComponentFixture<Exngfor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exngfor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exngfor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
