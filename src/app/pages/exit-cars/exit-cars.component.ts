import { Component, OnInit } from '@angular/core';
import { ParkingService, Vehicle } from '../../models/parking-car.model';
import { ParkingCarServiceService } from '../../services/parkingCar/parking-car-service.service';

@Component({
  selector: 'app-exit-cars',
  templateUrl: './exit-cars.component.html',
  styleUrls: ['./exit-cars.component.css']
})
export class ExitCarsComponent implements OnInit {
  public vehicles: Vehicle[] = [];
  public parking: ParkingService[] = [];

  txtPlate = '';
  existService = true;
  start = false;
  hide = false;
  minutes: number;

  constructor(private serviceParking: ParkingCarServiceService) { }

  ngOnInit() {
  }

  keyUpUpperCase() {
    if (this.txtPlate !== '') {
      this.txtPlate = this.txtPlate.toUpperCase();
    }
    this.vehicles = [];
    this.parking = [];
    this.start = false;
    this.existService = true;
  }

  clickGetVehicleLastService() {
    this.serviceParking.getLastParkingByVehiclePlate(this.txtPlate)
      .subscribe((data) => {
        this.parking = data;
        if (this.parking.length > 0) {
          this.existService = true;
          this.vehicles = [data[0].Vehicle];
          this.start = true;
        } else {
          this.existService = false;
          this.vehicles = [];
          this.start = false;
        }
      });
  }

  clickConfirmFinalService(parkingFinal) {
    this.serviceParking.putPaking(parkingFinal)
      .subscribe((data) =>
        this.serviceParking.getServiceById(parkingFinal.Id)
          .subscribe((lastService) => {
            this.parking = lastService;
            const entry = this.parking[0].DateTimeExit;
            const exit = this.parking[0].DateTimeEntry;
            const diff = Math.abs(Date.parse(entry) - Date.parse(exit));
            this.minutes = Math.floor((diff / 1000) / 60);
            this.start = false;
            this.hide = true;
          })
      );
  }

  clickFinal() {
    this.txtPlate = '';
    this.existService = true;
    this.start = false;
    this.hide = false;
    this.minutes = null;
    this.vehicles = [];
    this.parking = [];
  }

}
