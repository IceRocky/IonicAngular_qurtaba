import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeepCleaningPageRoutingModule } from './deep-cleaning-routing.module';

import { DeepCleaningPage } from './deep-cleaning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeepCleaningPageRoutingModule
  ],
  declarations: [DeepCleaningPage]
})
export class DeepCleaningPageModule {}
