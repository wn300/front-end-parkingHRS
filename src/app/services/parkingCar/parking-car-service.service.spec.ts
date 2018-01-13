import { TestBed, inject } from '@angular/core/testing';

import { ParkingCarServiceService } from './parking-car-service.service';

describe('ParkingCarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingCarServiceService]
    });
  });

  it('should be created', inject([ParkingCarServiceService], (service: ParkingCarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
