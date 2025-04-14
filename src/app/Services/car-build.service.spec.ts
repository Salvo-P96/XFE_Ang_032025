import { TestBed } from '@angular/core/testing';

import { CarBuildService } from './car-build.service';

describe('CarBuildService', () => {
  let service: CarBuildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarBuildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
