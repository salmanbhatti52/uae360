import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteAccountPopupPage } from './delete-account-popup.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAccountPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAccountPopupPageRoutingModule {}
