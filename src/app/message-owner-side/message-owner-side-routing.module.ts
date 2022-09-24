import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageOwnerSidePage } from './message-owner-side.page';

const routes: Routes = [
  {
    path: '',
    component: MessageOwnerSidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageOwnerSidePageRoutingModule {}
