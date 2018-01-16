import { Component, OnInit } from '@angular/core';
import { ParkingCarServiceService } from '../../services/parkingCar/parking-car-service.service';
import { Rates, Vehicle, ParkingService } from '../../models/parking-car.model';

@Component({
  selector: 'app-entry-cars',
  templateUrl: './entry-cars.component.html',
  styleUrls: ['./entry-cars.component.css']
})
export class EntryCarsComponent implements OnInit {
  public rates: Rates[] = [];
  public vehicles: Vehicle[] = [];
  public parking: ParkingService[] = [];

  btnConfirm = false;
  start = false;
  existService = false;
  txtPlate = '';
  rateSelect = 1;

  newDriver: string;
  newIdentificationDriver: number;
  newPhoneDriver: number;
  newBrand: string;
  newColor: string;

  constructor(private serviceParking: ParkingCarServiceService) { }

  ngOnInit() {
    this.serviceParking.getRates()
      .subscribe(data => {
        this.rates = data;
      });
  }

  clickGetVehicleByPlate() {
    if (this.txtPlate !== '') {
      this.serviceParking.getVehicleByPlate(this.txtPlate)
        .subscribe((data) => {
          this.vehicles = data;
          if (this.vehicles.length > 0) {
            this.serviceParking.getLastParkingByVehiclePlate(data[0].VehicularPlate)
              .subscribe((parkingService) => {
                this.parking = parkingService;
                if (this.parking.length === 0) {
                  this.start = true;
                  this.btnConfirm = true;
                  this.existService = false;
                } else {
                  this.start = false;
                  this.btnConfirm = false;
                  this.existService = true;
                }
              });
          } else {
            this.start = true;
            this.btnConfirm = true;
            this.existService = false;
          }
        });
    }
  }

  keyUpUpperCase() {
    if (this.txtPlate !== '') {
      this.txtPlate = this.txtPlate.toUpperCase();
    }
    this.vehicles = [];
    this.start = false;
  }

  clickPostVehicleAndService() {
    const newVehicle = new Vehicle;

    newVehicle.VehicularPlate = this.txtPlate;
    newVehicle.Driver = this.newDriver;
    newVehicle.DriverIdentification = this.newIdentificationDriver;
    newVehicle.Phone = this.newPhoneDriver;
    newVehicle.Brand = this.newBrand;
    newVehicle.Color = this.newColor;

    if (newVehicle.VehicularPlate !== ''
      && newVehicle.Driver !== ''
      && newVehicle.DriverIdentification !== null
      && newVehicle.Phone !== null
      && newVehicle.Brand !== ''
      && newVehicle.Color !== '') {

      this.serviceParking.postVehicle(newVehicle)
        .subscribe((data) => {
          this.serviceParking.getVehicleByPlate(newVehicle.VehicularPlate)
            .subscribe((vehicle) => {
              this.eventSaveService(vehicle);
            });
        });
    }
  }

  clickFinal() {
    this.vehicles = [];
    this.parking = [];
    this.txtPlate = '';
    this.start = false;
    this.rateSelect = 1;
    this.newDriver = '';
    this.newIdentificationDriver = null;
    this.newPhoneDriver = null;
    this.newBrand = '';
    this.newColor = '';
    this.btnConfirm = false;
    this.existService = false;
  }

  clickConfirmService(vehicle: Vehicle[]) {
    this.eventSaveService(vehicle);
  }

  public eventSaveService(vehicle: Vehicle[]) {
    const newService = new ParkingService;
    newService.IdRate = this.rateSelect;
    newService.IdVehicle = vehicle[0].Id;
    newService.DateTimeEntry = new Date();
    newService.Estate = 0;

    this.serviceParking.postPaking(newService).subscribe(parking =>
      this.serviceParking.getLastParkingByVehiclePlate(vehicle[0].VehicularPlate)
        .subscribe((parkingService) => {
          this.parking = parkingService;
          if (this.parking.length > 0) {
            this.btnConfirm = false;
            this.start = false;
            this.vehicles = vehicle;
          }
        })
    );
  }
}
