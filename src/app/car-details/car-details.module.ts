import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarDetailsPageRoutingModule } from './car-details-routing.module';
import { SwiperModule } from 'swiper/angular';
import { CarDetailsPage } from './car-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    CarDetailsPageRoutingModule
  ],
  declarations: [CarDetailsPage]
})
export class CarDetailsPageModule {}
