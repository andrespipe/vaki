import { TestBed } from '@angular/core/testing';

import { VakisService } from './vakis.service';

describe('VakisService', () => {
  let service: VakisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VakisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
