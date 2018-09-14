import { TestBed, inject } from '@angular/core/testing';

import { MetricConverterService } from './metric-converter.service';

describe('MetricConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetricConverterService]
    });
  });

  it('should be created', inject([MetricConverterService], (service: MetricConverterService) => {
    expect(service).toBeTruthy();
  }));
});
