import { Component, OnInit } from '@angular/core';
import { ParkingCarServiceService } from '../../services/parkingCar/parking-car-service.service';
import { ParkingService } from '../../models/parking-car.model';

@Component({
  selector: 'app-in-service',
  templateUrl: './in-service.component.html',
  styleUrls: ['./in-service.component.css']
})
export class InServiceComponent implements OnInit {
  public parkings: ParkingService[] = [];

  inService = true;

  constructor(private serviceParking: ParkingCarServiceService) { }

  ngOnInit() {
    this.serviceParking.getAllServiceParking()
      .subscribe((data) => {
        this.parkings = data;
        if (this.parkings.length === 0) {
          this.inService = false;
        } else {
          this.inService = true;
        }
      });
  }

}
