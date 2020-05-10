import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio7Component } from './exercicio7.component';

describe('Exercicio7Component', () => {
  let component: Exercicio7Component;
  let fixture: ComponentFixture<Exercicio7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercicio7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercicio7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
