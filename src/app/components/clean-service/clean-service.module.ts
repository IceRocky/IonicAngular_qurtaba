import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CleanServicePageRoutingModule } from './clean-service-routing.module';

import { CleanServicePage } from './clean-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CleanServicePageRoutingModule
  ],
  declarations: [CleanServicePage]
})
export class CleanServicePageModule {}
