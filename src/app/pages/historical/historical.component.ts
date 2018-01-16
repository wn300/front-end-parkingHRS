import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../models/parking-car.model';
import { ParkingCarServiceService } from '../../services/parkingCar/parking-car-service.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
  public parkings: ParkingService[] = [];

  historical = true;

  constructor(private serviceParking: ParkingCarServiceService) { }

  ngOnInit() {
    this.serviceParking.getAllPreviouServiceParking()
      .subscribe((data) => {
        this.parkings = data;
        if (this.parkings.length === 0) {
          this.historical = false;
        } else {
          this.historical = true;
        }
      });
  }
}
