import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCleanPage } from './home-clean.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCleanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCleanPageRoutingModule {}
