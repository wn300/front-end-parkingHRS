import { Component, OnInit } from '@angular/core';
import { ParkingCarServiceService } from '../../services/parkingCar/parking-car-service.service';
import { Rates } from '../../models/parking-car.model';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  public rates: Rates[] = [];

  ratesExist = true;
  txtRate: number;
  txtDescription: string;

  constructor(private serviceParking: ParkingCarServiceService) { }

  ngOnInit() {
    this.serviceParking.getAllRates()
      .subscribe((data) => { this.rates = data; });
  }

  clickAddRate() {
    if (this.txtRate !== null && this.txtDescription !== '') {
      const rate = new Rates;

      rate.Rate = this.txtRate;
      rate.Description = this.txtDescription;

      this.serviceParking.postRate(rate).subscribe((data) => {

        this.serviceParking.getAllRates()
          .subscribe((rateNew) => { this.rates = rateNew; this.txtRate = null; this.txtDescription = ''; });
      });
    }
  }
}
