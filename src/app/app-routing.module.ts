import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
