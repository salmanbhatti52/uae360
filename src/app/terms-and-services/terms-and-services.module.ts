import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsAndServicesPageRoutingModule } from './terms-and-services-routing.module';

import { TermsAndServicesPage } from './terms-and-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsAndServicesPageRoutingModule
  ],
  declarations: [TermsAndServicesPage]
})
export class TermsAndServicesPageModule {}
