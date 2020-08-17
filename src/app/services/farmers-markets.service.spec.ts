import { TestBed } from '@angular/core/testing';

import { FarmersMarketsService } from './farmers-markets.service';

describe('FarmersMarketsService', () => {
  let service: FarmersMarketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmersMarketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
