import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillaPage } from './villa.page';

const routes: Routes = [
  {
    path: '',
    component: VillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillaPageRoutingModule {}
