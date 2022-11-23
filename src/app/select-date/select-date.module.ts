import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDatePageRoutingModule } from './select-date-routing.module';

import { SelectDatePage } from './select-date.page';
// import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    // CalendarModule.forRoot({
    //   doneLabel: 'Save',
    //   closeIcon: true
    // }),
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDatePageRoutingModule
  ],
  declarations: [SelectDatePage]
})
export class SelectDatePageModule {}
