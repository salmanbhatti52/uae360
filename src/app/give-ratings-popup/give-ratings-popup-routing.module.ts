import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiveRatingsPopupPage } from './give-ratings-popup.page';

const routes: Routes = [
  {
    path: '',
    component: GiveRatingsPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiveRatingsPopupPageRoutingModule {}
