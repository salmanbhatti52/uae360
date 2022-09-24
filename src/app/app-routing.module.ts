import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-before-login',
    pathMatch: 'full'
  },
  {
    path: 'home-before-login',
    loadChildren: () => import('./home-before-login/home-before-login.module').then( m => m.HomeBeforeLoginPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'car-details',
    loadChildren: () => import('./car-details/car-details.module').then( m => m.CarDetailsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'verify-phone-by-otp',
    loadChildren: () => import('./verify-phone-by-otp/verify-phone-by-otp.module').then( m => m.VerifyPhoneByOtpPageModule)
  },
  {
    path: 'terms-and-services',
    loadChildren: () => import('./terms-and-services/terms-and-services.module').then( m => m.TermsAndServicesPageModule)
  },
  {
    path: 'forgot-password-by-email',
    loadChildren: () => import('./forgot-password-by-email/forgot-password-by-email.module').then( m => m.ForgotPasswordByEmailPageModule)
  },
  {
    path: 'otp-by-email',
    loadChildren: () => import('./otp-by-email/otp-by-email.module').then( m => m.OtpByEmailPageModule)
  },
  {
    path: 'live-chat',
    loadChildren: () => import('./live-chat/live-chat.module').then( m => m.LiveChatPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'home-cars-after-login',
    loadChildren: () => import('./home-cars-after-login/home-cars-after-login.module').then( m => m.HomeCarsAfterLoginPageModule)
  },
  {
    path: 'message-owner-side',
    loadChildren: () => import('./message-owner-side/message-owner-side.module').then( m => m.MessageOwnerSidePageModule)
  },
  {
    path: 'give-ratings-popup',
    loadChildren: () => import('./give-ratings-popup/give-ratings-popup.module').then( m => m.GiveRatingsPopupPageModule)
  },
  {
    path: 'cancel-booking-popup',
    loadChildren: () => import('./cancel-booking-popup/cancel-booking-popup.module').then( m => m.CancelBookingPopupPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
