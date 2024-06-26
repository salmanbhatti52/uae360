import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { AppComponent } from '../app.component';
import { ApiService } from '../services/api.service';
import { MenuController } from '@ionic/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
// import { Share } from '@capacitor/share';
// import { Browser } from '@capacitor/browser';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-home-cars-after-login',
  templateUrl: './home-cars-after-login.page.html',
  styleUrls: ['./home-cars-after-login.page.scss'],
})
export class HomeCarsAfterLoginPage implements OnInit {
  totalNotifications: Number;
  interval: any;
  item1 = true;
  item2 = false;
  item3 = false;
  item4 = false;
  item5 = false;
  carTypes: any
  selectedItem: number = 0;
  carTypeOne = '';
  carTypeTwo = '';
  carTypeThree = '';
  carTypeFour = '';
  carTypeOneId = '';
  carTypeTwoId = '';
  carTypeThreeId = '';
  carTypeFourId = '';

  latitude: number;
  longitude: number;
  userLocation: string = '';
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  // public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  // public results = [...this.data];
  result = [];
  showContent = true;
  pickups = [];
  pickupsData = true;
  term: any;
  cars = [];
  selectedCarIndex = null;
  showCategories = false;
  rentCategories = [{ category: 'Day' }, { category: 'Month' }]
  categoryVal = 'Day';
  clickedCarIds: any = [];
  clickCount: any = 0;
  viewCount: any = 0;
  clickedCardetails: any = [];
  constructor(public router: Router,
    public navCtrlr: NavController,
    public checkUser: CheckUserService,
    public appComponent: AppComponent,
    public api: ApiService,
    public menuCtrlr: MenuController,
    public nativeGeoCoder: NativeGeocoder
  ) { }

  ngOnInit() {
    // =======update appPages===========
    console.log('AppUserId: ', this.checkUser.appUserId);
    this.checkUser.checkUser();
    console.log("AppPages: ", this.checkUser.appPages);
    this.appComponent.appPages = this.checkUser.appPages;
    // =======done============

    // ==============localUserData====================

    this.api.localUserData = JSON.parse(localStorage.getItem('localUserData'));
    console.log('localUserData: ', this.api.localUserData);

    // ================================================
    this.getCarTypes();
    //  this.getCars();
    this.fetchLocation();
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
      this.ionViewWillEnter();
      event.target.complete();
    }, 2000);
  };

  ionViewWillEnter() {
    this.selectedCarIndex = null;
    // ================notifications status check===================
    // console.log('notificationVal: ',localStorage.getItem('notificationVal'));
    let toggleVal = localStorage.getItem('notificationVal');
    if (toggleVal == 'true') {
      this.api.toggleVal = true;
    } else if (toggleVal == 'false') {
      this.api.toggleVal = false;
    } else {
      this.api.toggleVal = true;
    }

    console.log('api.toggleVal', this.api.toggleVal);
    // ====================done=====================

    if (this.result.length > 0) {
      this.showContent = false;
    } else {
      this.showContent = true;
    }

    if (localStorage.getItem('viewedCount') == null) {
      this.viewCount = 0;
    } else {
      this.viewCount = parseInt(localStorage.getItem('viewedCount'), 10);
      console.log('count----', this.viewCount);

    }
    if (localStorage.getItem('contactedCount') == null) {
      this.clickCount = 0;
    } else {
      this.clickCount = parseInt(localStorage.getItem('contactedCount'), 10);
      console.log('clickCount count----', this.clickCount);

    }

    this.getNotifications();
    this.getCars();
    this.getmodal();
  }

  getNotifications() {
    let data = {
      users_id: this.checkUser.appUserId
    };
    this.api.sendRequest('notifications_unread', data).subscribe((res: any) => {
      console.log("Notification Respone: ", res);
      if (res.status == 'success') {
        if (res.data.length > 0) {
          this.totalNotifications = res.data.length
        } else if (res.data.length == 0) {
          this.totalNotifications = 0;
        }

      } else if (res.status == 'error') {

      }

    }, (err) => {
      console.log("Api Error: ", err);

    })
  }
  getmodal() {
    this.api.getData('get_cars_brands').subscribe((res: any) => {

      console.log('get_cars_brands Response: ', res);
      if (res.status == 'success') {
        this.cars = res.data
      } else if (res.status == 'error') {

      }

    }, (err) => {

      console.log('Error', err);

    });
  }
  selectCar(index: any, modal: any) {
    if (this.selectedCarIndex === index) {
      this.selectedCarIndex = null; // Unselect
    } else {
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;
      console.log(modal.cars_brands_id);
      this.selectedCarIndex = index; // Select
      this.getbrandCars(modal.cars_brands_id)
    }
  }

  getbrandCars(carId) {
    this.api.showLoading();
    this.api.sendRequest('get_cars_by_brand', { cars_brands_id: carId }).subscribe((res: any) => {
      this.api.hideLoading();
      console.log(res);
      if (res.status == 'success') {
        this.api.hideLoading();
        this.pickupsData = true;
        this.pickups = res.data;

      } else if (res.status == 'error') {
        this.api.hideLoading();
        this.pickups = [];
        this.pickupsData = false

      } else {

      }
    }, (err) => {
      this.api.hideLoading();
      console.log(err);

    })
  }
  displayCategories() {
    if (this.showCategories == false) {
      this.showCategories = true;
    }
    else {
      this.showCategories = false;
    }
  }
  selectedCategory(val) {
    console.log(val);
    this.categoryVal = val;
  }
  handleChange(event) {
    this.result = []
    console.log('Event: ', event);

    const query = event.target.value.toLowerCase();
    console.log('query: ', query);

    if (query == '') {
      this.showContent = true;

    }
    if (query != '') {
      let data = {
        users_customers_id: this.checkUser.appUserId,
        keyword: query
      };
      this.api.showLoading();
      this.api.sendRequest('getCarsByFiltersByName', data).subscribe((res: any) => {
        console.log("Response: ", res);
        this.api.hideLoading();
        if (res.status == 'success') {
          this.showContent = false;
          this.result = res.data;

        } else if (res.status == 'error') {
          this.pickups = [];
          if (res.message != 'Keyword Required') {
            this.api.presentToast(res.message);
          }
        } else {

        }

      }, (err) => {
        this.api.hideLoading();
        console.log("API Call Error: ", err);

      })
    }

  }

  clearResult() {
    this.result = [];
    // this.getCars()
    this.showContent = true;
  }


  async fetchLocation() {
    const getCurrentLocation = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    });
    console.log('Current Location: ', getCurrentLocation);
    this.latitude = getCurrentLocation.coords.latitude;
    this.longitude = getCurrentLocation.coords.longitude;
    console.log('Latitude: ', this.latitude);
    console.log('Longitude: ', this.longitude);
    this.fetchAddress();

  }

  fetchAddress() {
    this.nativeGeoCoder.reverseGeocode(this.latitude, this.longitude, this.options)
      .then((result: NativeGeocoderResult[]) => {
        console.log('Result: ', result);
        console.log('Result 0: ', result[0]);

        this.api.fetchLocation = result[0].countryName;
      }, (err) => {
        console.log('Error:', err);

      });
  }

  getCarTypes() {
    // this.api.showLoading();
    this.api.sendRequest('carType').subscribe((res: any) => {
      // this.api.hideLoading();
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
      // this.api.hideLoading();
    })
  }

  getCars() {
    this.pickupsData = true
    let data = {
      user_id: this.checkUser.appUserId
      // user_id: 2
    }
    this.api.showLoading();
    this.api.sendRequest('cars', data).subscribe((res: any) => {
      console.log("Response get cars:", res);
      if (res.status == 'success') {
        this.api.hideLoading()
        this.pickups = res.data;
        this.api.allCars = res.data;
        console.log("api.allCars: ", this.api.allCars);

      } else if (res.status == 'error') {
        this.api.hideLoading()
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
  gotoFilter() {
    this.router.navigate(['/filters']);
  }
  gotoCarDetails(car_id) {
    let data = {
      car_id: car_id,
      user_id: this.checkUser.appUserId
    }
    this.api.showLoading();
    this.api.sendRequest('getCarsById', data).subscribe((res: any) => {
      this.api.hideLoading();
      console.log('api response:', res);
      if (res.status == 'success') {
        this.api.carDataById = res.data;
        console.log('carDataById:', this.api.carDataById);
        this.router.navigate(['/car-details']);
        if (!this.clickedCardetails.includes(car_id)) {
          this.clickedCardetails.push(car_id);
          this.viewCount += 1;
          console.log('view count addding', this.viewCount);

          localStorage.setItem('viewedCount', this.viewCount);
        }
      }

    }, (err) => {
      this.api.hideLoading();
      console.log(err);

    })
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
    // if (itemVal== 'All') {
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

    //   this.getcarsbyId(this.carTypeOneId)

    // } else if (itemVal == 'Luxury') {
    //   this.pickupsData = true
    //   this.pickups = [];
    //   this.item1 = false;
    //   this.item2 = false;
    //   this.item3 = true;
    //   this.item4 = false;
    //   this.item5 = false;

    //   this.getcarsbyId(this.carTypeTwoId)
    // } else if (itemVal == 'Pickup') {
    //   this.pickupsData = true
    //   this.pickups = [];
    //   this.item1 = false;
    //   this.item2 = false;
    //   this.item3 = false;
    //   this.item4 = true;
    //   this.item5 = false;

    //   this.getcarsbyId(this.carTypeThreeId)
    // } else if (itemVal == 'SUV') {
    //   this.pickupsData = true
    //   this.pickups = [];
    //   this.item1 = false;
    //   this.item2 = false;
    //   this.item3 = false;
    //   this.item4 = false;
    //   this.item5 = true;


    //   this.getcarsbyId(this.carTypeFourId)
    // } else {

    // }
  }

  // getCarsByCarType old api endpoint
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

  onCarClick(carId: any) {

    if (!this.clickedCarIds.includes(carId)) {
      this.clickedCarIds.push(carId);
      this.clickCount += 1;
      console.log(this.clickCount);

      localStorage.setItem('contactedCount', this.clickCount);
    }

  }
  async sendEmail() {
    // const email = 'example@example.com'; // Specify the recipient's email address
    // const subject = encodeURIComponent('Your Subject Here'); // URL encode the subject
    // const body = encodeURIComponent('Your email body text here'); // URL encode the body text

    // const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // await Browser.open({ url: mailtoLink });
  }

  async inviteOthers() {
    // await Share.share({
    //   title: 'Book Cars Online at 360UAE',
    //   text: 'Really awesome cars you can book',
    //   url: 'https://dubai360.com/',
    //   dialogTitle: 'Share with buddies',
    // })
  }

  gotoNotifications() {
    this.router.navigate(['/notifications']);
  }
  homeTab() {
    this.router.navigate(['/home-cars-after-login']);
  }
  messagesTab() {
    this.router.navigate(['/messages']);
  }
  bookingTab() {
    this.router.navigate(['/bookings']);
  }
  favoriteTab() {
    this.router.navigate(['/favorites']);
  }
}
