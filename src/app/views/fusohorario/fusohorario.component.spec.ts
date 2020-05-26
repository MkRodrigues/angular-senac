import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusohorarioComponent } from './fusohorario.component';

describe('FusohorarioComponent', () => {
  let component: FusohorarioComponent;
  let fixture: ComponentFixture<FusohorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusohorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusohorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
