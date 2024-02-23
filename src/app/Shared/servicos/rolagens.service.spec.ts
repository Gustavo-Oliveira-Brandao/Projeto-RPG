import { TestBed } from '@angular/core/testing';

import { RolagensService } from './rolagens.service';

describe('RolagensService', () => {
  let service: RolagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
