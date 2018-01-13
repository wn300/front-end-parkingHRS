import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';

import { BillComponent } from './bill/bill.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    BillComponent
  ],
  exports: [
    HeaderComponent,
    BillComponent
  ]
})
export class ComponentsModule { }
