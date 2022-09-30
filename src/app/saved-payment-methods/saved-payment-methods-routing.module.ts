import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedPaymentMethodsPage } from './saved-payment-methods.page';

const routes: Routes = [
  {
    path: '',
    component: SavedPaymentMethodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedPaymentMethodsPageRoutingModule {}
