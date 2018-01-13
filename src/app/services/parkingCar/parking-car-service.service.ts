import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

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
}
