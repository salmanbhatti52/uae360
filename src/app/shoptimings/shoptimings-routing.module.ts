import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoptimingsPage } from './shoptimings.page';

const routes: Routes = [
  {
    path: '',
    component: ShoptimingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoptimingsPageRoutingModule {}
