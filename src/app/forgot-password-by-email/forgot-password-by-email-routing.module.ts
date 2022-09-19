import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordByEmailPage } from './forgot-password-by-email.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordByEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordByEmailPageRoutingModule {}
