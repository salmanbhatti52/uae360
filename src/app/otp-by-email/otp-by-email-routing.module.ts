import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpByEmailPage } from './otp-by-email.page';

const routes: Routes = [
  {
    path: '',
    component: OtpByEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpByEmailPageRoutingModule {}
