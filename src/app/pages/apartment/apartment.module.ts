import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApartmentPageRoutingModule } from './apartment-routing.module';

import { ApartmentPage } from './apartment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApartmentPageRoutingModule
  ],
  declarations: [ApartmentPage]
})
export class ApartmentPageModule {}
