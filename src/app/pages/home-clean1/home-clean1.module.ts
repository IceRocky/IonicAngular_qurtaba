import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeClean1PageRoutingModule } from './home-clean1-routing.module';

import { HomeClean1Page } from './home-clean1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeClean1PageRoutingModule
  ],
  declarations: [HomeClean1Page]
})
export class HomeClean1PageModule {}
