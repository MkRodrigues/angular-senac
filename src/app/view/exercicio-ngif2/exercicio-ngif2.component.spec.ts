import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioNgif2Component } from './exercicio-ngif2.component';

describe('ExercicioNgif2Component', () => {
  let component: ExercicioNgif2Component;
  let fixture: ComponentFixture<ExercicioNgif2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioNgif2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioNgif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
