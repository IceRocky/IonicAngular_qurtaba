import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickServicePageRoutingModule } from './quick-service-routing.module';

import { QuickServicePage } from './quick-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickServicePageRoutingModule
  ],
  declarations: [QuickServicePage]
})
export class QuickServicePageModule {}
