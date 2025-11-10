import { TestBed } from '@angular/core/testing';

import { BuildPizzaService } from './build-pizza.service';

describe('BuildPizzaService', () => {
  let service: BuildPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
