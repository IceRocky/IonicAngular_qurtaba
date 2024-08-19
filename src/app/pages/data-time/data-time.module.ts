import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataTimePageRoutingModule } from './data-time-routing.module';

import { DataTimePage } from './data-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataTimePageRoutingModule
  ],
  declarations: [DataTimePage]
})
export class DataTimePageModule {}
