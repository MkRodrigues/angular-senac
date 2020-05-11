import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioNgif1Component } from './exercicio-ngif1.component';

describe('ExercicioNgif1Component', () => {
  let component: ExercicioNgif1Component;
  let fixture: ComponentFixture<ExercicioNgif1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioNgif1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioNgif1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
