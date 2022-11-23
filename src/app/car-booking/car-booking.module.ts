import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarBookingPageRoutingModule } from './car-booking-routing.module';

import { CarBookingPage } from './car-booking.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CalendarModule.forRoot({
      doneLabel: 'Save',
      closeIcon: true
    }),
    CommonModule,
    FormsModule,
    IonicModule,
    CarBookingPageRoutingModule
  ],
  declarations: [CarBookingPage]
})
export class CarBookingPageModule {}
