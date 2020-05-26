import { TestBed } from '@angular/core/testing';

import { FusohorarioService } from './fusohorario.service';

describe('FusohorarioService', () => {
  let service: FusohorarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FusohorarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
