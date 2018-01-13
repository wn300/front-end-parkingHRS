import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryCarsComponent } from './entry-cars/entry-cars.component';
import { ExitCarsComponent } from './exit-cars/exit-cars.component';
import { RatesComponent } from './rates/rates.component';
import { HistoricalComponent } from './historical/historical.component';


const routes: Routes = [
    {
        path: 'EntryCars',
        component: EntryCarsComponent
    },
    {
        path: 'ExitCars',
        component: ExitCarsComponent
    },
    {
        path: 'Rates',
        component: RatesComponent
    },
    {
        path: 'Historical',
        component: HistoricalComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
