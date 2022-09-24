import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageOwnerSidePageRoutingModule } from './message-owner-side-routing.module';

import { MessageOwnerSidePage } from './message-owner-side.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageOwnerSidePageRoutingModule
  ],
  declarations: [MessageOwnerSidePage]
})
export class MessageOwnerSidePageModule {}
