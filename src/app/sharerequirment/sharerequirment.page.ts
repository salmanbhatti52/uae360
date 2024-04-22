import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicSlides, NavController } from '@ionic/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { ApiService } from '../services/api.service';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-sharerequirment',
  templateUrl: './sharerequirment.page.html',
  styleUrls: ['./sharerequirment.page.scss'],
})
export class SharerequirmentPage implements OnInit {
  cars = [
    // { name: 'Car 1', image: 'assets/images/car2.png' },
    // { name: 'Car 2', image: 'assets/images/car2.png' },
    // { name: 'Car 3', image: 'assets/images/car2.png' },
    // { name: 'Car 4', image: 'assets/images/car2.png' },
    // { name: 'Car 5', image: 'assets/images/car2.png' }
    // Add more cars as needed
  ];
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

  selectedIndices: any = [];
  passengersarray = [];
  passengers = [{ value: '2', status: 'unchecked' }, { value: '4', status: 'unchecked' }, { value: '6', status: 'unchecked' }, { value: 'Other', status: 'unchecked' }
  ]
  carbrand: any;

  constructor(public location: Location,
    public api: ApiService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.getcarmodals()
    this.getCarTypes();
  }

  getcarmodals() {
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

  goBack() {
    this.location.back();
  }

  selectCar(index: any, car: any) {
    console.log('index', index);

    const selectedIndex = this.selectedIndices.indexOf(index);
    if (selectedIndex > -1) {
      this.selectedIndices.splice(selectedIndex, 1); // Remove index if already selected
    } else {
      this.selectedIndices.push(index); // Add index if not already selected
      this.carbrand = car.name
    }
  }

  isSelected(index: any): boolean {
    return this.selectedIndices.includes(index);
  }

  selectpassengers(p: any) {
    if (p.status == 'unchecked') {
      p.status = 'checked'
      this.passengersarray.push(p.value)
      console.log('job aray', this.passengersarray)
    } else {
      p.status = 'unchecked';
      const index = this.passengersarray.indexOf(p.value);
      if (index > -1) {
        this.passengersarray.splice(index, 1); // 2nd parameter means remove one item only
        console.log('job aray', this.passengersarray)
      }

    }
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

  post() {
    this.navCtrl.navigateForward('profile');
  }



}
