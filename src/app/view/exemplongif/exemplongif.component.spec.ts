import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplongifComponent } from './exemplongif.component';

describe('ExemplongifComponent', () => {
  let component: ExemplongifComponent;
  let fixture: ComponentFixture<ExemplongifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplongifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplongifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
