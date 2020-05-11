import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exngfor1Component } from './exngfor1.component';

describe('Exngfor1Component', () => {
  let component: Exngfor1Component;
  let fixture: ComponentFixture<Exngfor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exngfor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exngfor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
