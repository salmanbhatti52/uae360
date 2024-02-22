import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentrequiredPageRoutingModule } from './documentrequired-routing.module';

import { DocumentrequiredPage } from './documentrequired.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentrequiredPageRoutingModule
  ],
  declarations: [DocumentrequiredPage]
})
export class DocumentrequiredPageModule {}
