import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCarsAfterLoginPage } from './home-cars-after-login.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCarsAfterLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCarsAfterLoginPageRoutingModule {}
