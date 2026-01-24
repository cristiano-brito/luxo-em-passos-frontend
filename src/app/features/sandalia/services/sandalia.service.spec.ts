import { TestBed } from '@angular/core/testing';

import { SandaliaService } from './sandalia.service';

describe('SandaliaService', () => {
  let service: SandaliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandaliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
