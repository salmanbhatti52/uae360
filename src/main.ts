import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineCustomElements as ionicDefineCustomElements } from '@ionic/pwa-elements/loader';
// import { defineCustomElements as stripeDefineCustomElements } from 'stripe-pwa-elements/loader';
// import { defineCustomElements } from '@ionic/pwa-elements/loader'
if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule).then(()=>stripeDefineCustomElements(window))
//   .catch(err => console.log(err));
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

ionicDefineCustomElements(window);
