import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

import { HomeCarsAfterLoginPageRoutingModule } from './home-cars-after-login-routing.module';

import { HomeCarsAfterLoginPage } from './home-cars-after-login.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    HomeCarsAfterLoginPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HomeCarsAfterLoginPage]
})
export class HomeCarsAfterLoginPageModule { }
