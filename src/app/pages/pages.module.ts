import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryCarsComponent } from './entry-cars/entry-cars.component';
import { ExitCarsComponent } from './exit-cars/exit-cars.component';
import { RatesComponent } from './rates/rates.component';
import { HistoricalComponent } from './historical/historical.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [
    EntryCarsComponent,
    ExitCarsComponent,
    RatesComponent,
    HistoricalComponent
  ],
  exports: [
    EntryCarsComponent,
    ExitCarsComponent,
    RatesComponent,
    HistoricalComponent
  ]
})
export class PagesModule { }
