import { Component } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { CheckUserService } from './check-user.service';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appUserId:any;
  appPages = [];
  appUserData: any;
  constructor(public menu:MenuController,
    public router:Router,
    public navCtrl:NavController,
    public platform:Platform,
    public checkUser:CheckUserService,
    public api:ApiService){}

    async ngOnInit() {
      let userId =  localStorage.getItem('appUserId')
      console.log('userId: ',userId);
      
      if(userId !== null){
        this.router.navigate(['/home-cars-after-login']);
      }
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
