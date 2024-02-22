import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  lastEmittedValue: RangeValue;
  rentCostDayStart: any;
  rentCostDayEnd: any;
  rentCostMonthStart: any;
  rentCostMonthEnd: any;
  result = [];
  cars = [
    // { name: 'Aston Martin', image: 'assets/images/car3.png' },
    // { name: 'Audi', image: 'assets/images/car3.png' },
    // { name: 'Lamborghini', image: 'assets/images/car3.png' },
    // { name: 'BMW', image: 'assets/images/car3.png' },
    // { name: 'Chevrolet', image: 'assets/images/car3.png' }
    // Add more cars as needed
  ];
  selectedCarIndex = null;
  selectedYearIndex = null;
  selectedSeatIndex = null;
  selectedAgeIndex = null;
  years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 1971]
  seats = ["2", "4 - 5", "6 - 7", "8 - 12", "13+"];
  agerequired = ["18", "19", "20", "21", "22", "23", "24", "25+"];

  selectedOption: any;
  item1 = true;
  item2 = false;
  item3 = false;
  item4 = false;
  item5 = false;
  carTypes = [];
  carTypeOne = '';
  carTypeTwo = '';
  carTypeThree = '';
  carTypeFour = '';

  carTypeOneId = '';
  carTypeTwoId = '';
  carTypeThreeId = '';
  carTypeFourId = '';

  constructor(public location: Location,
    public navCtrlr: NavController,
    public checkUser: CheckUserService,
    public api: ApiService,
    public router: Router) { }

  ngOnInit() {
    this.getCarTypes();
    this.getmodal()
  }
  ionViewWillEnter() {

  }
  goBack() {
    this.location.back();
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
      console.log(modal.cars_brands_id);

      this.selectedCarIndex = index; // Select
    }
  }
  selectYear(index: any) {
    if (this.selectedYearIndex === index) {
      this.selectedYearIndex = null; // Unselect
    } else {
      this.selectedYearIndex = index; // Select
    }

  }
  selectSeat(index: any) {
    if (this.selectedSeatIndex === index) {
      this.selectedSeatIndex = null; // Unselect
    } else {
      this.selectedSeatIndex = index; // Select
    }

  }
  selectOption(option: any) {
    console.log(option);

    this.selectedOption = option


  }
  selectAge(index: any) {
    if (this.selectedAgeIndex === index) {
      this.selectedAgeIndex = null; // Unselect
    } else {
      this.selectedAgeIndex = index; // Select
    }

  }
  onIonChangePerDay(event) {
    console.log("EventForDay: ", event);
    this.rentCostDayStart = event.detail.value.lower;
    this.rentCostDayEnd = event.detail.value.upper;
    console.log("rent_cost_day_start", this.rentCostDayStart);
    console.log("rent_cost_day_end", this.rentCostDayEnd);

  }
  onIonChangePerMonth(event) {
    console.log("EventForMonth: ", event);
    this.rentCostMonthStart = event.detail.value.lower;
    this.rentCostMonthEnd = event.detail.value.upper;
    console.log("rent_cost_month_start", this.rentCostMonthStart);
    console.log("rent_cost_month_end", this.rentCostMonthEnd);

  }
  applyFilter() {
    this.result = [];

    console.log("rent_cost_day_start", this.rentCostDayStart);
    console.log("rent_cost_day_end", this.rentCostDayEnd);
    console.log("rent_cost_month_start", this.rentCostMonthStart);
    console.log("rent_cost_month_end", this.rentCostMonthEnd);

    if (this.rentCostDayStart !== undefined || this.rentCostMonthStart !== undefined) {
      let data = {
        users_customers_id: this.checkUser.appUserId,
        rent_cost_day_start: this.rentCostDayStart,
        rent_cost_day_end: this.rentCostDayEnd,
        rent_cost_month_start: this.rentCostMonthStart,
        rent_cost_month_end: this.rentCostMonthEnd
      };
      this.api.showLoading();
      this.api.sendRequest('getCarsByFilters', data).subscribe((res: any) => {
        this.api.hideLoading();
        console.log('Response: ', res);
        if (res.status == 'success') {
          this.result = res.data;
        } else if (res.status == 'error') {
          if (res.message == 'Cars are empty.') {
            this.api.presentToast('No car found in this range.')
          }

        }
      }, (err) => {
        this.api.hideLoading();
        console.log("API call Error: ", err);

      })
    } else {
      this.api.presentToast("Plz specify your range for day or month");
    }
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
      }

    }, (err) => {
      this.api.hideLoading();
      console.log(err);

    })
  }

  getCarTypes() {
    // this.api.showLoading();
    this.api.sendRequest('carType').subscribe((res: any) => {
      // this.api.hideLoading();
      console.log('getCarTypes: ', res);
      if (res.status == 'success') {

        this.carTypes = res.data;
        this.carTypeOne = this.carTypes[0].car_type;
        this.carTypeTwo = this.carTypes[1].car_type;
        this.carTypeThree = this.carTypes[2].car_type;
        this.carTypeFour = this.carTypes[3].car_type;

        this.carTypeOneId = this.carTypes[0].car_type_id;
        this.carTypeTwoId = this.carTypes[1].car_type_id;
        this.carTypeThreeId = this.carTypes[2].car_type_id;
        this.carTypeFourId = this.carTypes[3].car_type_id;

      }

    }, (err: any) => {
      console.log('Error', err);
      // this.api.hideLoading();
    })
  }

  selectItem(itemVal) {
    if (itemVal == 'all') {
      this.item1 = true;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;

    } else if (itemVal == 'Sports') {

      this.item1 = false;
      this.item2 = true;
      this.item3 = false;
      this.item4 = false;
      this.item5 = false;



    } else if (itemVal == 'Luxury') {

      this.item1 = false;
      this.item2 = false;
      this.item3 = true;
      this.item4 = false;
      this.item5 = false;

    } else if (itemVal == 'Pickup') {

      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = true;
      this.item5 = false;

    } else if (itemVal == 'SUV') {
      this.item1 = false;
      this.item2 = false;
      this.item3 = false;
      this.item4 = false;
      this.item5 = true;

    } else {

    }
  }
}
