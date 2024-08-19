import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTimePage } from './data-time.page';

const routes: Routes = [
  {
    path: '',
    component: DataTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTimePageRoutingModule {}
