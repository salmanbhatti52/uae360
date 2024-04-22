import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ModalController, NavController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
// import { Share } from '@capacitor/share';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  favorites = '';
  showCategories = false;
  rentCategories = [{ category: 'Day' }, { category: 'Month' }]
  categoryVal = 'Day';
  carData: any;
  cardetail: any
  vehicleName: any;
  carId: any;
  appUserId: string;
  company_id: any;
  company_name: any;
  showModal = false;
  selectedService: 'branchPickup' | 'deliveryToYou' | 'airportDelivery' | null = null;
  about: any;
  carattributes: any;
  specifications: any = [];
  features: any = [];
  driverage: any;
  security: any;
  selectedIndices: any = [];
  selectedIndices2: any = [];
  languages: any;
  dellocation: any;
  dynamicColor = '#ff0000';
  selectedPaymentIndex = null;
  selected = 'day';
  documentdata: any;
  documents_requirements: any;
  UAEresidents: any;
  ForTourists: any;
  pickups = [];
  limitedData = [];
  carsbrandId: any;
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
    // this.carData = [this.api.carDataById];
    this.carsbrandId = this.carData[0].cars_brands_id
    console.log(this.carData);
    if (this.carData != undefined) {
      for (let data of this.carData) {
        this.vehicleName = data.vehical_name;
        this.carId = data.car_id;

        this.company_id = data.users_company.users_company_id;
        this.company_name = data.users_company.company_name;
        this.about = data.users_company.about

        this.driverage = data.min_driver_age;
        this.security = data.security_deposit

        if (data.cars_attributes.length != 0) {
          this.carattributes = data.cars_attributes

          this.specifications = this.carattributes.filter(item => item.attributes.attribute_type === 'Specification');
          this.features = this.carattributes.filter(item => item.attributes.attribute_type === 'Feature');

        }

        if (this.dellocation == undefined) {

        } else {
          if (data.users_company.users_company_fast_deliveries.length != 0) {

            this.dellocation = data.users_company.users_company_fast_deliveries


          }
        }
        this.languages = data.users_company.users_company_languages
        console.log(this.languages);

        if (this.languages == undefined) {

        } else {
          if (data.users_company.users_company_languages.length != 0) {
            this.languages = data.users_company.users_company_languages

          }
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

    this.getdocument();
    this.getbrandCars(this.carsbrandId);

  }
  ngOnInit() {


  }
  goBack() {
    this.location.back();
  }

  select(timeFrame: string) {
    this.selected = timeFrame;
  }

  displayCategories() {
    if (this.showCategories == false) {
      this.showCategories = true;
    }
    else {
      this.showCategories = false;
    }
  }
  getdocument() {
    let data = {
      car_id: this.carId,
    }
    this.api.showLoading();
    this.api.sendRequest('get_cars_documents', data).subscribe((res: any) => {
      this.api.hideLoading();
      console.log('api response:', res);
      if (res.status == 'success') {
        this.documentdata = res.data

      }

    }, (err) => {
      this.api.hideLoading();
      console.log(err);

    })
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
    // await Share.share({
    //   title: 'See cool stuff',
    //   text: 'Really awesome thing you need to see right meow',
    //   url: 'http://ionicframework.com/',
    //   dialogTitle: 'Share with buddies',
    // });
  }

  selectedCategory(val) {
    console.log(val);
    this.categoryVal = val;
  }
  selectPaymentmode(index: any) {
    if (this.selectedPaymentIndex === index) {
      this.selectedPaymentIndex = null; // Unselect
    } else {
      this.selectedPaymentIndex = index; // Select
    }

  }

  isSelected(index: any): boolean {
    return this.selectedIndices.includes(index);
  }
  SelectLocation(index: any): boolean {
    return this.selectedIndices2.includes(index);
  }
  SelectLanguage(index: any) {
    console.log('index', index);

    const selectedIndex = this.selectedIndices.indexOf(index);
    if (selectedIndex > -1) {
      this.selectedIndices.splice(selectedIndex, 1); // Remove index if already selected
    } else {
      this.selectedIndices.push(index); // Add index if not already selected
    }
  }

  Selectedlocation(index: any) {
    const selectedIndex = this.selectedIndices2.indexOf(index);
    if (selectedIndex > -1) {
      this.selectedIndices2.splice(selectedIndex, 1); // Remove index if already selected
    } else {
      this.selectedIndices2.push(index); // Add index if not already selected
    }
  }

  getbrandCars(carId) {
    this.api.showLoading();
    this.api.sendRequest('get_cars_by_brand', { cars_brands_id: carId }).subscribe((res: any) => {
      this.api.hideLoading();
      console.log(res);
      if (res.status == 'success') {
        this.api.hideLoading();
        this.pickups = res.data;
        this.limitedData = this.pickups.slice(0, 3);
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
        // this.router.navigate(['/car-details']);
        this.content.scrollToTop(400); // 400ms animation duration
        this.ionViewWillEnter();
      }

    }, (err) => {
      this.api.hideLoading();
      console.log(err);

    })
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
    this.navCtrlr.navigateForward(['documentrequired', {
      carId: this.carId
    }]);
  }
  faq() {
    this.navCtrlr.navigateForward('faq');
  }
}
