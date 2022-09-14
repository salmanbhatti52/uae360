import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeBeforeLoginPage } from './home-before-login.page';

const routes: Routes = [
  {
    path: '',
    component: HomeBeforeLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBeforeLoginPageRoutingModule {}
