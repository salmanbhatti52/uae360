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
  contacted: any = 0;
  viewed: any;
  constructor(public navCtrlr: NavController,
    public checkUser: CheckUserService,
    public api: ApiService,
    public location: Location) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.getFavoriteCars();

    if (this.api.localUserData.account_type == 'SignupWithApp') {
      this.userProfile = `${this.api.imageUrlString}${this.api.localUserData.profile_pic}`
      console.log('adasdsad', this.userProfile);

    } else {
      this.userProfile = this.api.localUserData.profile_pic;
    }
    this.username = this.api.localUserData.username

    if (localStorage.getItem('contactedCount') == null) {
      this.contacted = 0;
    } else {
      this.contacted = localStorage.getItem('contactedCount');
    }

    if (localStorage.getItem('viewedCount') == null) {
      this.viewed = 0;
    } else {
      this.viewed = localStorage.getItem('viewedCount');
    }
    console.log('count contacted', this.contacted);

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
