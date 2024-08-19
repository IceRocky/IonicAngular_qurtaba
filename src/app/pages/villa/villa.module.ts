import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillaPageRoutingModule } from './villa-routing.module';

import { VillaPage } from './villa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillaPageRoutingModule
  ],
  declarations: [VillaPage]
})
export class VillaPageModule {}
