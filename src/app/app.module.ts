import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ParkingCarServiceService } from './services/parkingCar/parking-car-service.service';

import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ParkingCarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
