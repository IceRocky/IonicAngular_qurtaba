import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCleanPageRoutingModule } from './home-clean-routing.module';

import { HomeCleanPage } from './home-clean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCleanPageRoutingModule
  ],
  declarations: [HomeCleanPage]
})
export class HomeCleanPageModule {}
