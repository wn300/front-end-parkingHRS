import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Vehicle, ParkingService, Rates } from '../../models/parking-car.model';

@Injectable()
export class ParkingCarServiceService {

  constructor(private http: HttpClient) { }

  getRates(): Observable<any> {
    return this.http.get(environment.server + '/Rates/all')
      .map((data: any) => data);
  }

  getVehicleByPlate(plate: string): Observable<any> {
    return this.http.get(environment.server + '/Vehicle/plate/' + plate)
      .map((data: any) => data);
  }

  getpreviousParkingByVehiclePlate(plate: string): Observable<any> {
    return this.http.get(environment.server + '/ParkingServices/previous/vehicularPlate/' + plate)
      .map((data: any) => data);
  }

  getLastParkingByVehiclePlate(plate: string): Observable<any> {
    return this.http.get(environment.server + '/ParkingServices/last/vehicularPlate/' + plate)
      .map((data: any) => data);
  }

  getServiceById(id: number): Observable<any> {
    return this.http.get(environment.server + '/ParkingServices/id/' + id)
      .map((data: any) => data);
  }

  getAllServiceParking(): Observable<any> {
    return this.http.get(environment.server + '/ParkingServices/cuerrentServices/vehicules')
      .map((data: any) => data);
  }

  getAllPreviouServiceParking(): Observable<any> {
    return this.http.get(environment.server + '/ParkingServices/all/previous/vehicules')
      .map((data: any) => data);
  }

  getAllRates(): Observable<any> {
    return this.http.get(environment.server + '/Rates/all')
      .map((data: any) => data);
  }

  postVehicle(vehicle: Vehicle) {
    return this.http.post(environment.server + '/Vehicle/new', vehicle)
      .map((data: any) => data);
  }

  postPaking(parkingService: ParkingService) {
    return this.http.post(environment.server + '/ParkingServices/new', parkingService)
      .map((data: any) => data);
  }

  postRate(rate: Rates) {
    return this.http.post(environment.server + '/Rates/new', rate)
      .map((data: any) => data);
  }


  putPaking(parkingService: ParkingService) {
    return this.http.put(environment.server + '/ParkingServices/update', parkingService)
      .map((data: any) => data);
  }
}
