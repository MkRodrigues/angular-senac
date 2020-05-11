import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioNgif4Component } from './exercicio-ngif4.component';

describe('ExercicioNgif4Component', () => {
  let component: ExercicioNgif4Component;
  let fixture: ComponentFixture<ExercicioNgif4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioNgif4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioNgif4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
