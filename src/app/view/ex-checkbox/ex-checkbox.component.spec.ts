import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCheckboxComponent } from './ex-checkbox.component';

describe('ExCheckboxComponent', () => {
  let component: ExCheckboxComponent;
  let fixture: ComponentFixture<ExCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
