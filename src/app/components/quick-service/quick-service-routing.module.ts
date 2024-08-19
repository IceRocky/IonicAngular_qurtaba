import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickServicePage } from './quick-service.page';

const routes: Routes = [
  {
    path: '',
    component: QuickServicePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickServicePageRoutingModule {}
