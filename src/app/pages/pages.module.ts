import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryCarsComponent } from './entry-cars/entry-cars.component';
import { ExitCarsComponent } from './exit-cars/exit-cars.component';
import { RatesComponent } from './rates/rates.component';
import { HistoricalComponent } from './historical/historical.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { InServiceComponent } from './in-service/in-service.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ComponentsModule,
    HttpModule
  ],
  declarations: [
    EntryCarsComponent,
    ExitCarsComponent,
    RatesComponent,
    HistoricalComponent,
    InServiceComponent
  ],
  exports: [
    EntryCarsComponent,
    ExitCarsComponent,
    RatesComponent,
    HistoricalComponent,
    InServiceComponent
  ]
})
export class PagesModule { }
