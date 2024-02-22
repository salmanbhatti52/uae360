import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ModalController, NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Share } from '@capacitor/share';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
  favorites = '';
  showCategories = false;
  rentCategories = [{ category: 'Day' }, { category: 'Month' }]
  categoryVal = 'Day';
  carData = [];
  vehicleName: any;
  carId: any;
  appUserId: string;
  company_id: any;
  company_name: any;
  showModal = false;
  selectedService: 'branchPickup' | 'deliveryToYou' | 'airportDelivery' | null = null;
  about: any;
  constructor(public location: Location,
    public navCtrlr: NavController,
    public modalController: ModalController,
    public checkUser: CheckUserService,
    public api: ApiService,
    public router: Router,
    private popoverCtrl: PopoverController) { }

  presentModal(service: 'branchPickup' | 'deliveryToYou' | 'airportDelivery') {
    this.selectedService = service;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  ionViewWillEnter() {
    this.carData = this.api.carDataById;
    if (this.carData != undefined) {
      for (let data of this.carData) {
        this.vehicleName = data.vehical_name;
        this.carId = data.car_id;
        if (data.users_company.length != 0) {
          this.company_id = data.users_company[0].users_company_id;
          this.company_name = data.users_company[0].company_name;
          this.about = data.users_company[0].about
        } else {
          this.company_id = '';
          this.company_name = '';
          this.about = '';
        }

        if (!data.favourite_status) {
          this.favorites = 'dislike';


        } else {
          this.favorites = data.favourite_status;

        }


      }
    }

    this.appUserId = localStorage.getItem('appUserId');
    if (this.appUserId == null) {
      console.log('appUserIdonCar_Details: ', this.appUserId);
      this.favorites = 'dislike';
    }
  }
  ngOnInit() {


  }
  goBack() {
    this.location.back();
  }
  displayCategories() {
    if (this.showCategories == false) {
      this.showCategories = true;
    }
    else {
      this.showCategories = false;
    }
  }
  makefavorite() {
    if (this.appUserId == null) {
      this.navCtrlr.navigateForward('sign-in');
    } else {

      let data = {
        favourite_car_id: this.carId,
        user_id: this.appUserId,
      };
      this.api.showLoading();
      this.api.sendRequest('favouriteCars', data).subscribe((res: any) => {
        this.api.hideLoading();
        console.log('Favorite Api Response: ', res);
        if (res.status == 'success') {
          this.favorites = res.data
          this.getCarDataById();
        } else if (res.status == 'error') {

        }

      }, (err) => {
        this.api.hideLoading();
        console.log('Error', err);

      });
    }
  }

  getCarDataById() {

    let data = {
      car_id: this.carId,
      user_id: this.checkUser.appUserId
    }
    this.api.showLoading();
    this.api.sendRequest('getCarsById', data).subscribe((res: any) => {
      this.api.hideLoading();
      console.log('api response:', res);
      if (res.status == 'success') {
        this.api.carDataById = res.data;
        console.log('carDataById:', this.api.carDataById);

      }

    }, (err) => {
      this.api.hideLoading();
      console.log(err);

    })
  }
  async share() {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }

  selectedCategory(val) {
    console.log(val);
    this.categoryVal = val;
  }
  gotoRatings() {
    if (this.checkUser.appUserId == null) {
      this.navCtrlr.navigateForward('sign-in');
    } else if (this.checkUser.appUserId != null) {

      this.navCtrlr.navigateForward('ratings');

    } else {

    }
  }
  startCarBooking() {
    if (this.checkUser.appUserId == null) {
      this.router.navigate(['/sign-in']);
    } else if (this.checkUser.appUserId != null) {
      this.router.navigate(['/car-booking']);
    } else {

    }

  }
  startChatwithOwner() {
    if (this.checkUser.appUserId == null) {
      this.navCtrlr.navigateForward('sign-in');
    } else if (this.checkUser.appUserId != null) {
      let data = {
        requestType: "startChat",
        userId: this.checkUser.appUserId,
        otherUserId: this.company_id
      }
      this.api.sendRequest("Chat", data).subscribe((res: any) => {
        console.log("Start_chat_Request_Response: ", res);
        if (res.status == 'success') {
          this.api.companyId = this.company_id;
          console.log("this.api.companyId: ", this.api.companyId);

          this.navCtrlr.navigateForward(['/message-owner-side', {
            company_id: this.company_id,
            company_name: this.company_name
          }]);
        }
      }, (err) => {
        console.log("Error: ", err);

      })

    } else {

    }

  }

  async viewtimings() {
    await this.popoverCtrl.dismiss();
    this.navCtrlr.navigateForward('shoptimings');
  }

  async delieverycharges() {
    await this.popoverCtrl.dismiss();
    this.navCtrlr.navigateForward('deliveryterms');
  }
  documentrequired() {
    this.navCtrlr.navigateForward('documentrequired');
  }
}
