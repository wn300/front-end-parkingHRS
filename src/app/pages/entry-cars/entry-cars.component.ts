import { Component, OnInit } from '@angular/core';
import { ParkingCarServiceService } from '../../services/parkingCar/parking-car-service.service';
import { Rates, Vehicle } from '../../models/parking-car.model';

@Component({
  selector: 'app-entry-cars',
  templateUrl: './entry-cars.component.html',
  styleUrls: ['./entry-cars.component.css']
})
export class EntryCarsComponent implements OnInit {
  public rates: Rates[] = [];
  public vehicles: Vehicle[] = [];

  txtPlate = '';
  start = false;

  constructor(private ratesService: ParkingCarServiceService) { }

  ngOnInit() {
    this.ratesService.getRates().subscribe(data => { this.rates = data; });
  }

  clickGetVehicleByPlate() {
    if (this.txtPlate !== '') {
      this.ratesService.getVehicleByPlate(this.txtPlate).subscribe((data) => { this.vehicles = data; });
      this.start = true;
    } else {
      this.start = false;
    }
  }

  keyUpUpperCase() {
    if (this.txtPlate !== '') {
      this.txtPlate = this.txtPlate.toUpperCase();
    } else {
      this.start = false;
    }
  }
}
