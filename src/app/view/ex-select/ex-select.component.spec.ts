import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExSelectComponent } from './ex-select.component';

describe('ExSelectComponent', () => {
  let component: ExSelectComponent;
  let fixture: ComponentFixture<ExSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
