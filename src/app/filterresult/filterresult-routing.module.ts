import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterresultPage } from './filterresult.page';

const routes: Routes = [
  {
    path: '',
    component: FilterresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterresultPageRoutingModule {}
