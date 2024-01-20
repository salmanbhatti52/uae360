import { Component } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen} from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { CheckUserService } from './check-user.service';
import { ApiService } from './services/api.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import OneSignal from "onesignal-cordova-plugin";
import { StatusBar, Style } from '@capacitor/status-bar';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  interval:any;
  appUserId:any;
  appPages = [];
  appUserData: any;
  googleUserData: any;
  constructor(public menu:MenuController,
  public router:Router,
  public navCtrl:NavController,
  public platform:Platform,
  public checkUser:CheckUserService,
  public api:ApiService
  )
  {
    this.initializeApp();
  }

  initializeApp() { 
    this.platform.ready().then(() => {
      this.interval = setInterval(() => {
        this.getSystemSettings();
      },2000);
      
      this.pushNotification();
      this.setStatuBar();
    });
    
  }

  setStatuBar(){
    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Dark });
    };
    
    const setStatusBarStyleLight = async () => {
      await StatusBar.setStyle({ style: Style.Light });
    };
    
    // const hideStatusBar = async () => {
    //   await StatusBar.hide();
    // };
    
    const showStatusBar = async () => {
      await StatusBar.show();
    };
  }
  getSystemSettings(){
    
    this.api.getData('system_settings').subscribe((res:any)=>{
      // console.log("Setting Api Response: ",res);
      if(res.status == 'success'){
        for (let data of res.data){
          if(data.type == 'social_login_status'){
            this.api.socialLoginStaus = data.description;
            console.log("socialLoginStaus",this.api.socialLoginStaus);
            
          }
        }
      }
    },(err)=>{
      console.log("Setting Api Error: ",err);
      
    })
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

      localStorage.setItem("oneSignalUserId", osUser.userId);
      // this.api.oneSignalUserId = osUser.userId
    });
    
  }

  async ngOnInit() {

    // ========uncomment ===========================
    let userId =  localStorage.getItem('appUserId')
    console.log('userId: ',userId);
    
    if(userId !== null){
      this.router.navigate(['/home-cars-after-login']);
    }
    // ================b/w part========================
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

    this.api.localUserData = undefined;
 
    localStorage.clear();
    this.signOutForGoogle();
    this.signOutForFacebook();
    // ===========to update sidemenu pages after logout==============
    console.log(this.checkUser.appUserId);
        
    this.checkUser.checkUser();
    console.log(this.checkUser.appPages);
    this.appPages = this.checkUser.appPages;
    // ===================done==================================
    this.navCtrl.navigateRoot('home-before-login');

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
