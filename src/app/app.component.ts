import { Component } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { CheckUserService } from './check-user.service';
import { ApiService } from './services/api.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import OneSignal from "onesignal-cordova-plugin";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appUserId:any;
  appPages = [];
  appUserData: any;
  googleUserData: any;
  constructor(public menu:MenuController,
  public router:Router,
  public navCtrl:NavController,
  public platform:Platform,
  public checkUser:CheckUserService,
  public api:ApiService){
    this.platform.ready().then(() => {
      this.initializeApp();
    });
  }

  initializeApp() {

    this.pushNotification();
  }

  pushNotification() {
    console.log("push notification in function.....");
    OneSignal.setAppId("9b5b89b8-946c-4f66-8bad-e6142d157d17");
    OneSignal.setNotificationOpenedHandler(function (jsonData) {
      console.log("notificationOpenedCallback: " + JSON.stringify(jsonData));
    });

    OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
      console.log("promptForPushNotificationsWithUserResponse: " + accepted);
    });

    OneSignal.getDeviceState((resp: any) => {
      const osUser: any = resp;
      console.log("incoming onesignl resp-----", resp);
      console.log("incoming onesignl uidd-----", osUser.userId);

      localStorage.setItem("onesignaluserid", osUser.userId);
    });
    
  }
  async ngOnInit() {
    let userId =  localStorage.getItem('appUserId')
    console.log('userId: ',userId);
    
    if(userId !== null){
      this.router.navigate(['/home-cars-after-login']);
    }
  }
  async refresh(){
    const authCode = await GoogleAuth.refresh();
    console.log('refresh: ',authCode);
  }
  async signOutForGoogle(){
    await GoogleAuth.signOut();
    this.googleUserData = null;
  }

  async signOutForFacebook(){
    await FacebookLogin.logout();
  }
  
  logout(){
    this.checkUser.appUserId = null;
    localStorage.removeItem('appUserId');
    this.api.localUserData = undefined;
    localStorage.removeItem('localUserData');
    console.log('appUserId removed');
    // ===========to update sidemenu pages after logout==============
    console.log(this.checkUser.appUserId);
        
    this.checkUser.checkUser();
    console.log(this.checkUser.appPages);
    this.appPages = this.checkUser.appPages;
    // ===================done==================================
    this.navCtrl.navigateForward('home-before-login');
    this.closeMenu();
  }
  closeMenu(){
    this.menu.close();
  }
  gotoSignIn(){
    this.menu.toggle();
    this.navCtrl.navigateForward('sign-in');
  }
  goForEditProfile(){
    this.navCtrl.navigateForward('edit-profile');
    this.closeMenu();
  }
  
}
