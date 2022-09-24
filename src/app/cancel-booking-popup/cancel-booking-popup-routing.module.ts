import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelBookingPopupPage } from './cancel-booking-popup.page';

const routes: Routes = [
  {
    path: '',
    component: CancelBookingPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelBookingPopupPageRoutingModule {}
