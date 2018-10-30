import { TestBed } from '@angular/core/testing';

import { StockPriceCheckerService } from './stock-price-checker.service';

describe('StockPriceCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockPriceCheckerService = TestBed.get(StockPriceCheckerService);
    expect(service).toBeTruthy();
  });
});
