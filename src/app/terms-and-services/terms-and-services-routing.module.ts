import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsAndServicesPage } from './terms-and-services.page';

const routes: Routes = [
  {
    path: '',
    component: TermsAndServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsAndServicesPageRoutingModule {}
