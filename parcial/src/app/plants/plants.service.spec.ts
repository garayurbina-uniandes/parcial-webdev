/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { PlantsService } from './plants.service';

describe('Service: Plants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantsService]
    });
  });

  it('should ...', inject([PlantsService], (service: PlantsService) => {
    expect(service).toBeTruthy();
  }));
});
