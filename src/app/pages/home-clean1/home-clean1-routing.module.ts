import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeClean1Page } from './home-clean1.page';

const routes: Routes = [
  {
    path: '',
    component: HomeClean1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeClean1PageRoutingModule {}
