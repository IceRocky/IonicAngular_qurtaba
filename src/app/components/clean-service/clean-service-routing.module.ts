import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CleanServicePage } from './clean-service.page';

const routes: Routes = [
  {
    path: '',
    component: CleanServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CleanServicePageRoutingModule {}
