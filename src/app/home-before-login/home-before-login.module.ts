import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

import { HomeBeforeLoginPageRoutingModule } from './home-before-login-routing.module';

import { HomeBeforeLoginPage } from './home-before-login.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    HomeBeforeLoginPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HomeBeforeLoginPage]
})
export class HomeBeforeLoginPageModule { }
