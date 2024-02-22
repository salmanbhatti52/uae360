import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  favorites: any;
  userProfile: any = '';
  username: any;
  constructor(public navCtrlr: NavController,
    public checkUser: CheckUserService,
    public api: ApiService,
    public location: Location) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.getFavoriteCars();

    this.userProfile = this.api.localUserData.profile_pic;
    if (this.api.localUserData.account_type == 'SignupWithApp') {
      this.userProfile = `${this.api.imageUrlString}${this.userProfile}`
    }
    this.username = this.api.localUserData.username
  }

  goBack() {
    this.location.back();
  }
  editprofile() {
    this.navCtrlr.navigateForward('edit-profile');
  }

  goto() {
    this.navCtrlr.navigateForward('sharerequirment');
  }

  fav() {
    this.navCtrlr.navigateForward('favorites');
  }

  getFavoriteCars() {
    let data = {
      user_id: this.checkUser.appUserId
    };
    this.api.showLoading();
    this.api.sendRequest("getFavouriteCars", data).subscribe((res: any) => {
      this.api.hideLoading();
      console.log('Favorite cars are: ', res);
      if (res.status == 'success') {
        this.favorites = res.data.length
      }
    }, (err) => {
      this.api.hideLoading();
      console.log(err);
    })
  }

}
