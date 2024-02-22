import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltersPageRoutingModule } from './filters-routing.module';

import { FiltersPage } from './filters.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    FiltersPageRoutingModule
  ],
  declarations: [FiltersPage]
})
export class FiltersPageModule { }
