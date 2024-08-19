import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApartmentPage } from './apartment.page';

const routes: Routes = [
  {
    path: '',
    component: ApartmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartmentPageRoutingModule {}
