import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpiryDatePopupPage } from './expiry-date-popup.page';

const routes: Routes = [
  {
    path: '',
    component: ExpiryDatePopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpiryDatePopupPageRoutingModule {}
