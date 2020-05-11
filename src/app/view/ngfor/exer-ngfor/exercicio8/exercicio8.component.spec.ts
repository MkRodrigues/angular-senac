import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio8Component } from './exercicio8.component';

describe('Exercicio8Component', () => {
  let component: Exercicio8Component;
  let fixture: ComponentFixture<Exercicio8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercicio8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercicio8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
