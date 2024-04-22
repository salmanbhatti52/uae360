import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
// import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

// SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  lastEmittedValue: RangeValue;
  rentCostDayStart: any = 10;
  rentCostDayEnd: any;
  rentCostMonthStart: any = 10;
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
  selecteddurationIndex = null;
  selectedBrandCarIndex = null;
  brandcars = false;
  modalcars: any;
  years: any;
  seats = [
    "2", "4 - 5", "6 - 7", "8 - 12", "13+"
  ];
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
  paymentmodes: any;
  selectedIndices: any = [];
  colorsmodes: any;
  clrselectedIndices: any = [];
  rentduration: any;
  public items: string[] = [' AUDI-RS-6-AVANT-WAGON', 'Badge 2', 'Badge 3', 'Badge 4', 'Badge 5'];
  public swiperConfig = {
    slidesPerView: 'auto',
    spaceBetween: 5,
    // Add more Swiper configurations as needed
  };
  selectedItem: any;
  originalData = {
    cars: [],
    years: [],
    seats: [], // seats and agerequired are static, may not need to store originals
    carTypes: [],
  };
  carDetails: any = {};
  constructor(public location: Location,
    public navCtrlr: NavController,
    public checkUser: CheckUserService,
    public api: ApiService,
    public router: Router) { }

  ngOnInit() {
    this.getCarTypes();
    this.getmodal();
    this.getModelyears();
    this.getPaymentmethod();
    this.getColors();
    this.rentalPeriod()
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
        this.originalData.cars = [...this.cars];
      } else if (res.status == 'error') {

      }

    }, (err) => {

      console.log('Error', err);

    });
  }
  getModelyears() {
    this.api.getData('get_models_years').subscribe((res: any) => {

      console.log('year Response: ', res);
      if (res.status == 'success') {
        this.years = res.data
        this.originalData.years = [...this.years];
        this.getnoOfseats()
      } else if (res.status == 'error') {

      }

    }, (err) => {

      console.log('Error', err);

    });
  }
  getnoOfseats() {
    this.api.getData('get_no_of_seats').subscribe((res: any) => {

      console.log('get_no_of_seats Response: ', res);
      if (res.status == 'success') {
        this.seats = res.data
        this.originalData.seats = [...this.seats];
      } else if (res.status == 'error') {

      }

    }, (err) => {

      console.log('Error', err);

    });
  }
  getPaymentmethod() {
    this.api.getData('get_payment_gateways').subscribe((res: any) => {

      // console.log('get_payment_gateways Response: ', res);
      if (res.status == 'success') {
        this.paymentmodes = res.data
      } else if (res.status == 'error') {

      }

    }, (err) => {

      console.log('Error', err);

    });
  }
  rentalPeriod() {
    this.api.getData('get_rent_durations').subscribe((res: any) => {

      // console.log('get_rent_durations Response: ', res);
      if (res.status == 'success') {
        this.rentduration = res.data
      } else if (res.status == 'error') {

      }

    }, (err) => {

      console.log('Error', err);

    });
  }
  selectduration(index: any) {
    if (this.selecteddurationIndex === index) {
      this.selecteddurationIndex = null; // Unselect
    } else {
      this.selecteddurationIndex = index; // Select
    }
  }
  getColors() {
    this.api.getData('get_cars_colors').subscribe((res: any) => {

      // console.log('get_cars_colors Response: ', res);
      if (res.status == 'success') {
        this.colorsmodes = res.data
      } else if (res.status == 'error') {

      }

    }, (err) => {

      console.log('Error', err);

    });
  }
  selectCar(index: any, modal: any) {
    if (this.selectedCarIndex === index) {
      this.selectedCarIndex = null; // Unselect
      this.brandcars = false;
      this.cars = [...this.originalData.cars];
      this.years = [...this.originalData.years];
      this.carTypes = [...this.originalData.carTypes];
      this.seats = this.originalData.seats
    } else {
      this.carDetails.cars_brands_id = modal.cars_brands_id;
      this.brandvechile(modal.cars_brands_id)
      console.log(modal.cars_brands_id);

      this.selectedCarIndex = index; // Select
    }
  }

  selectBrandCar(index: any, val: any) {
    console.log(val);

    if (this.selectedBrandCarIndex === index) {
      this.selectedBrandCarIndex = null; // Unselect
    } else {
      this.databyCar(val.car_id)
      this.selectedBrandCarIndex = index; // Select
    }
  }



  brandvechile(cars_brands_id: any) {
    this.modalcars = [];
    this.api.sendRequest('get_data_by_brand', { "cars_brands_id": cars_brands_id }).subscribe((res: any) => {

      console.log(res);
      if (res.status == 'success') {
        this.selectedBrandCarIndex = null;
        this.modalcars = res.data.cars
        this.years = res.data.models_years
        this.seats = res.data.seats
        this.carTypes = res.data.cars_types
        this.brandcars = true
      } else if (res.status == 'error') {


      } else {

      }
    }, (err) => {

      console.log(err);

    })
  }
  databyCar(carId) {
    this.years = []
    this.seats = []
    this.carTypes = []
    this.api.sendRequest('get_data_by_car', { "car_id": carId }).subscribe((res: any) => {

      console.log(res);
      if (res.status == 'success') {
        this.years = res.data.models_years
        this.seats = res.data.seats
        this.carTypes = res.data.cars_types
      } else if (res.status == 'error') {


      } else {

      }
    }, (err) => {

      console.log(err);

    })
  }
  selectYear(index: any, year: any) {
    console.log('year', year);

    if (this.selectedYearIndex === index) {
      this.selectedYearIndex = null; // Unselect
      this.carDetails.year = '';
    } else {
      this.carDetails.year = year.model_year
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
  isSelected(index: any): boolean {
    return this.selectedIndices.includes(index);
  }
  SelectPayemt(index: any) {
    console.log('index', index);

    const selectedIndex = this.selectedIndices.indexOf(index);
    if (selectedIndex > -1) {
      this.selectedIndices.splice(selectedIndex, 1); // Remove index if already selected
    } else {
      this.selectedIndices.push(index); // Add index if not already selected
    }
  }



  clrSelected(index: any): boolean {
    return this.clrselectedIndices.includes(index);
  }
  SelectColor(index: any) {
    const selectedIndex = this.clrselectedIndices.indexOf(index);
    if (selectedIndex > -1) {
      this.clrselectedIndices.splice(selectedIndex, 1); // Remove index if already selected
    } else {
      this.clrselectedIndices.push(index); // Add index if not already selected
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
    console.log("cardetails", this.carDetails);

    this.api.filterResult = this.carDetails
    this.router.navigate(['/filterresult']);
    // if (this.rentCostDayStart !== undefined || this.rentCostMonthStart !== undefined) {
    //   let data = {
    //     users_customers_id: this.checkUser.appUserId,
    //     rent_cost_day_start: this.rentCostDayStart,
    //     rent_cost_day_end: this.rentCostDayEnd,
    //     rent_cost_month_start: this.rentCostMonthStart,
    //     rent_cost_month_end: this.rentCostMonthEnd
    //   };
    //   this.api.showLoading();
    //   this.api.sendRequest('getCarsByFilters', data).subscribe((res: any) => {
    //     this.api.hideLoading();
    //     console.log('Response: ', res);
    //     if (res.status == 'success') {
    //       this.result = res.data;
    //     } else if (res.status == 'error') {
    //       if (res.message == 'Cars are empty.') {
    //         this.api.presentToast('No car found in this range.')
    //       }

    //     }
    //   }, (err) => {
    //     this.api.hideLoading();
    //     console.log("API call Error: ", err);

    //   })
    // } else {
    //   this.api.presentToast("Plz specify your range for day or month");
    // }
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
        // const allCarsObject = {
        //   car_type_id: 0, // You can use any identifier that makes sense for your application
        //   car_type: "All",
        //   image: "assets/images/icons/car_grey.svg", // Optionally, specify an image for the "All" type
        //   date_added: null,
        //   date_modified: null,
        //   status: "Active"
        // };

        // this.carTypes.unshift(allCarsObject);
        // this.originalData.carTypes = [...this.carTypes];

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

  selectItem(itemVal, index) {
    this.selectedItem = index;
    console.log(itemVal);



  }
}
