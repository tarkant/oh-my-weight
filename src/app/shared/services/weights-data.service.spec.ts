import { TestBed } from '@angular/core/testing';

import { WeightsDataService } from './weights-data.service';

describe('WeightsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeightsDataService = TestBed.get(WeightsDataService);
    expect(service).toBeTruthy();
  });
});
