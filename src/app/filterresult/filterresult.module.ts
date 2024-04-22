import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterresultPageRoutingModule } from './filterresult-routing.module';

import { FilterresultPage } from './filterresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterresultPageRoutingModule
  ],
  declarations: [FilterresultPage]
})
export class FilterresultPageModule {}
