import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CheckUserService } from '../check-user.service';
import { AppComponent } from '../app.component';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
// import { Share } from '@capacitor/share';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-home-before-login',
  templateUrl: './home-before-login.page.html',
  styleUrls: ['./home-before-login.page.scss'],
})
export class HomeBeforeLoginPage implements OnInit {
  totalNotifications = 6;
  item1 = true;
  item2 = false;
  item3 = false;
  item4 = false;
  item5 = false;
  carTypes = [];
  selectedCarIndex = null;
  selectedItem: number = 0;
  carTypeOne = '';
  carTypeTwo = '';
  carTypeThree = '';
  carTypeFour = '';
  carTypeOneId = '';
  carTypeTwoId = '';
  carTypeThreeId = '';
  carTypeFourId = '';

  showCategories = false;
  rentCategories = [{ category: 'Day' }, { category: 'Month' }]
  categoryVal = 'Day';
  pickups = [];
  pickupsData = true;
  term: any;
  constructor(public router: Router,
    public api: ApiService,
    public checkUser: CheckUserService,
    public appComponent: AppComponent) {

  }

  ngOnInit() {
    this.checkUser.appUserId = null;
    console.log(this.checkUser.appUserId);

    this.checkUser.checkUser();
    console.log(this.checkUser.appPages);
    this.appComponent.appPages = this.checkUser.appPages;

    this.getCarTypes();
    // this.getCars();

  }

  ionViewWillEnter() {
    this.getCars();

  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      this.item1 = true;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  };

  handleChange(event) {

  }

  clearResult() {

  }

  getCars() {
    this.pickupsData = true
    let data = {
      user_id: ''
    }
    this.api.showLoading();
    this.api.sendRequest('cars', data).subscribe((res: any) => {


      console.log(res);
      if (res.status == 'success') {
        this.api.hideLoading()
        console.log(res.data);
        this.pickups = res.data;
      } else if (res.staus == 'error') {
        this.api.hideLoading();
        if (this.pickups.length == 0) {
          this.pickupsData = false
        }
      } else {

      }

      // setTimeout(() => {
      //   this.api.hideLoading();
      // }, 2000);

    }, (err) => {
      setTimeout(() => {
        this.api.hideLoading();
      }, 2000);
      console.log(err);

    })
  }

  getCarTypes() {

    this.api.sendRequest('carType').subscribe((res: any) => {
      console.log('getCarTypes: ', res);
      if (res.status == 'success') {
        this.carTypes = res.data;
        const allCarsObject = {
          car_type_id: 0, // You can use any identifier that makes sense for your application
          car_type: "All",
          image: "assets/images/icons/car_grey.svg", // Optionally, specify an image for the "All" type
          date_added: null,
          date_modified: null,
          status: "Active"
        };

        this.carTypes.unshift(allCarsObject);
        // this.carTypeOne = this.carTypes[0].car_type;
        // this.carTypeTwo = this.carTypes[1].car_type;
        // this.carTypeThree = this.carTypes[2].car_type;
        // this.carTypeFour = this.carTypes[3].car_type;

        // this.carTypeOneId = this.carTypes[0].car_type_id;
        // this.carTypeTwoId = this.carTypes[1].car_type_id;
        // this.carTypeThreeId = this.carTypes[2].car_type_id;
        // this.carTypeFourId = this.carTypes[3].car_type_id;

      }

    }, (err: any) => {
      console.log('Error', err);

    })
  }

  gotoSignIn() {
    this.router.navigate(['/sign-in']);
  }

  async inviteOthers() {
    // await Share.share({
    //   title: 'Book Cars Online at 360UAE',
    //   text: 'Really awesome cars you can book',
    //   url: 'https://dubai360.com/',
    //   dialogTitle: 'Share with buddies',
    // })
  }
  selectItem(itemVal, index) {
    this.selectedItem = index;
    console.log(itemVal);

    this.selectedCarIndex = null;
    if (itemVal.car_type == 'All') {
      this.pickupsData = true
      this.pickups = [];
      this.getCars();
    } else {
      this.pickupsData = true
      this.pickups = [];
      this.getcarsbyId(itemVal.car_type_id)
    }
    // if (itemVal == 'all') {
    //   this.item1 = true;
    //   this.item2 = false;
    //   this.item3 = false;
    //   this.item4 = false;
    //   this.item5 = false;
    //   this.getCars();
    // } else if (itemVal == 'Sports') {
    //   this.pickupsData = true
    //   this.pickups = [];
    //   this.item1 = false;
    //   this.item2 = true;
    //   this.item3 = false;
    //   this.item4 = false;
    //   this.item5 = false;

    //   this.api.showLoading();
    //   let data = {
    //     car_type_id: this.carTypeOneId
    //   }
    //   this.api.sendRequest('getCarsByCarType', data).subscribe((res: any) => {

    //     console.log(res);
    //     if (res.status == 'success') {
    //       this.api.hideLoading();
    //       this.pickups = res.data;
    //     } else if (res.status == 'error') {
    //       this.api.hideLoading()
    //       if (this.pickups.length == 0) {
    //         this.pickupsData = false
    //       }
    //     } else {

    //     }
    //   }, (err) => {
    //     this.api.hideLoading();
    //     console.log(err);

    //   })
    // } else if (itemVal == 'Luxury') {
    //   this.pickupsData = true
    //   this.pickups = [];
    //   this.item1 = false;
    //   this.item2 = false;
    //   this.item3 = true;
    //   this.item4 = false;
    //   this.item5 = false;

    //   this.api.showLoading();
    //   let data = {
    //     car_type_id: this.carTypeTwoId
    //   }
    //   this.api.sendRequest('getCarsByCarType', data).subscribe((res: any) => {
    //     console.log(res);
    //     if (res.status == 'success') {
    //       this.api.hideLoading();
    //       this.pickups = res.data;
    //     } else if (res.status == 'error') {
    //       this.api.hideLoading()
    //       if (this.pickups.length == 0) {
    //         this.pickupsData = false
    //       }
    //     } else {

    //     }
    //   }, (err) => {
    //     this.api.hideLoading();
    //     console.log(err);

    //   })
    // } else if (itemVal == 'Pickup') {
    //   this.pickupsData = true
    //   this.pickups = [];
    //   this.item1 = false;
    //   this.item2 = false;
    //   this.item3 = false;
    //   this.item4 = true;
    //   this.item5 = false;

    //   this.api.showLoading();
    //   let data = {
    //     car_type_id: this.carTypeThreeId
    //   }
    //   this.api.sendRequest('getCarsByCarType', data).subscribe((res: any) => {
    //     console.log(res);
    //     if (res.status == 'success') {
    //       this.api.hideLoading();
    //       this.pickups = res.data;
    //     } else if (res.status == 'error') {
    //       this.api.hideLoading()
    //       if (this.pickups.length == 0) {
    //         this.pickupsData = false
    //       }
    //     } else {

    //     }
    //   }, (err) => {
    //     this.api.hideLoading();
    //     console.log(err);

    //   })
    // } else if (itemVal == 'SUV') {
    //   this.pickupsData = true
    //   this.pickups = [];
    //   this.item1 = false;
    //   this.item2 = false;
    //   this.item3 = false;
    //   this.item4 = false;
    //   this.item5 = true;

    //   this.api.showLoading();
    //   let data = {
    //     car_type_id: this.carTypeFourId
    //   }
    //   this.api.sendRequest('getCarsByCarType', data).subscribe((res: any) => {
    //     console.log(res);
    //     if (res.status == 'success') {
    //       this.api.hideLoading();
    //       this.pickups = res.data;
    //     } else if (res.status == 'error') {
    //       this.api.hideLoading()
    //       if (this.pickups.length == 0) {
    //         this.pickupsData = false
    //       }
    //     } else {

    //     }
    //   }, (err) => {
    //     this.api.hideLoading();
    //     console.log(err);

    //   })
    // } else {

    // }
  }


  getcarsbyId(carId) {
    this.api.showLoading();
    this.api.sendRequest('get_cars_by_type', { car_type_id: carId }).subscribe((res: any) => {
      this.api.hideLoading();
      console.log(res);
      if (res.status == 'success') {
        this.api.hideLoading();
        this.pickups = res.data;

      } else if (res.status == 'error') {
        this.api.hideLoading();
        if (this.pickups.length == 0) {
          this.pickupsData = false
        }
      } else {

      }
    }, (err) => {
      this.api.hideLoading();
      console.log(err);

    })
  }
}
