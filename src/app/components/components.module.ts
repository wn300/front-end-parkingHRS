import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';

import { BillComponent } from './bill/bill.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
