import { TestBed } from '@angular/core/testing';

import { CarregarService } from './carregar.service';

describe('CarregarService', () => {
  let service: CarregarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarregarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
