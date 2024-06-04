import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'ion2-calendar';
// import { PayPal} from '@ionic-native/paypal/ngx'
import { OneSignal } from "@awesome-cordova-plugins/onesignal/ngx";
// import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
@NgModule({

  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    CalendarModule.forRoot({
      doneLabel: 'Save',
      closeIcon: true
    })
  ],
  providers: [

    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    NativeGeocoder,
    OneSignal,
    SocialSharing
    // PayPal
    // Stripe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
