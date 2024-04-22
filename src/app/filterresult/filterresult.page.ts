import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CheckUserService } from '../check-user.service';

@Component({
  selector: 'app-filterresult',
  templateUrl: './filterresult.page.html',
  styleUrls: ['./filterresult.page.scss'],
})
export class FilterresultPage implements OnInit {
  filterdata: any;
  pickups: any;
  clickedCarIds: any = [];
  clickCount: any = 0;
  viewCount: any = 0;
  clickedCardetails: any = [];
  resultlength: any;
  constructor(public api: ApiService,
    public location: Location,
    public router: Router,
    public checkUser: CheckUserService
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
  ionViewWillEnter() {
    if (localStorage.getItem('viewedCount') == null) {
      this.viewCount = 0;
    } else {
      this.viewCount = parseInt(localStorage.getItem('viewedCount'), 10);
      console.log('count----', this.viewCount);

    }
    if (localStorage.getItem('contactedCount') == null) {
      this.viewCount = 0;
    } else {
      this.clickCount = parseInt(localStorage.getItem('contactedCount'), 10);
      console.log('clickCount count----', this.clickCount);

    }


    this.api.filterResult;

    this.filterCars(this.api.filterResult)
  }

  filterCars(filterdata) {
    this.api.showLoading()
    this.api.sendRequest('get_filtration_result', filterdata).subscribe((res: any) => {
      this.api.hideLoading();
      console.log(res);
      if (res.status == 'success') {
        this.api.hideLoading();
        this.pickups = res.data;
        this.resultlength = this.pickups.length
      } else if (res.status == 'error') {
        this.api.hideLoading();
        this.pickups = [];

      } else {

      }
    }, (err) => {
      this.api.hideLoading();
      console.log(err);

    })
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
          console.log(this.viewCount);

          localStorage.setItem('viewedCount', this.viewCount);
        }
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
}
