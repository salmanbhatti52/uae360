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
  },
  {
    path: 'live-chat-screen',
    loadChildren: () => import('./live-chat-screen/live-chat-screen.module').then( m => m.LiveChatScreenPageModule)
  },
  {
    path: 'car-booking',
    loadChildren: () => import('./car-booking/car-booking.module').then( m => m.CarBookingPageModule)
  },
  {
    path: 'select-date',
    loadChildren: () => import('./select-date/select-date.module').then( m => m.SelectDatePageModule)
  },
  {
    path: 'select-time',
    loadChildren: () => import('./select-time/select-time.module').then( m => m.SelectTimePageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'payment-details',
    loadChildren: () => import('./payment-details/payment-details.module').then( m => m.PaymentDetailsPageModule)
  },
  {
    path: 'new-payment-method',
    loadChildren: () => import('./new-payment-method/new-payment-method.module').then( m => m.NewPaymentMethodPageModule)
  },
  {
    path: 'booked',
    loadChildren: () => import('./booked/booked.module').then( m => m.BookedPageModule)
  },
  {
    path: 'ratings',
    loadChildren: () => import('./ratings/ratings.module').then( m => m.RatingsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'saved-payment-methods',
    loadChildren: () => import('./saved-payment-methods/saved-payment-methods.module').then( m => m.SavedPaymentMethodsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'delete-account-popup',
    loadChildren: () => import('./delete-account-popup/delete-account-popup.module').then( m => m.DeleteAccountPopupPageModule)
  },
  {
    path: 'expiry-date-popup',
    loadChildren: () => import('./expiry-date-popup/expiry-date-popup.module').then( m => m.ExpiryDatePopupPageModule)
  },
  {
    path: 'set-new-password',
    loadChildren: () => import('./set-new-password/set-new-password.module').then( m => m.SetNewPasswordPageModule)
  },
  {
    path: 'booking-details',
    loadChildren: () => import('./booking-details/booking-details.module').then( m => m.BookingDetailsPageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'sharerequirment',
    loadChildren: () => import('./sharerequirment/sharerequirment.module').then( m => m.SharerequirmentPageModule)
  },
  {
    path: 'shoptimings',
    loadChildren: () => import('./shoptimings/shoptimings.module').then( m => m.ShoptimingsPageModule)
  },
  {
    path: 'deliveryterms',
    loadChildren: () => import('./deliveryterms/deliveryterms.module').then( m => m.DeliverytermsPageModule)
  },
  {
    path: 'documentrequired',
    loadChildren: () => import('./documentrequired/documentrequired.module').then( m => m.DocumentrequiredPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
