import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPhoneByOtpPage } from './verify-phone-by-otp.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyPhoneByOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyPhoneByOtpPageRoutingModule {}
