import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeepCleaningPage } from './deep-cleaning.page';

const routes: Routes = [
  {
    path: '',
    component: DeepCleaningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeepCleaningPageRoutingModule {}
