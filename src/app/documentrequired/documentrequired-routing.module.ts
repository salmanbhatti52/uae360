import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentrequiredPage } from './documentrequired.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentrequiredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentrequiredPageRoutingModule {}
