import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioNgif3Component } from './exercicio-ngif3.component';

describe('ExercicioNgif3Component', () => {
  let component: ExercicioNgif3Component;
  let fixture: ComponentFixture<ExercicioNgif3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioNgif3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioNgif3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
