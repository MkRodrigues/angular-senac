import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExRadiobtnComponent } from './ex-radiobtn.component';

describe('ExRadiobtnComponent', () => {
  let component: ExRadiobtnComponent;
  let fixture: ComponentFixture<ExRadiobtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExRadiobtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExRadiobtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
