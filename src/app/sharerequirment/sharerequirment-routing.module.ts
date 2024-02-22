import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharerequirmentPage } from './sharerequirment.page';

const routes: Routes = [
  {
    path: '',
    component: SharerequirmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharerequirmentPageRoutingModule {}
