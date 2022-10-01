import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { GiveRatingsPopupPage } from '../give-ratings-popup/give-ratings-popup.page';
import { CancelBookingPopupPage } from '../cancel-booking-popup/cancel-booking-popup.page';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  previous_tab = true;
  upcoming_tab = false;
  previousItemdetails = false;
  upcomingItemdetails = false;
  constructor(public navCtrlr:NavController,
    public modalCtrlr:ModalController) { }

  ngOnInit() {
  }
  previousTab(tabVal){
    if(tabVal = 'previous'){
      console.log(tabVal);
      this.previous_tab = true;
      this.upcoming_tab = false;
      console.log(this.previous_tab);
      console.log(this.upcoming_tab);
      this.previousItemdetails = false;
      this.upcomingItemdetails = false;
    }
  }
  upcomingTab(tabVal){
    if(tabVal = 'upcoming'){
      console.log(tabVal)
      this.upcoming_tab = true;
      this.previous_tab = false;
      console.log(this.upcoming_tab);
      console.log(this.previous_tab);
      this.previousItemdetails = false;
      this.upcomingItemdetails = false;
    }
  }
  async openModal() {
    const modal = await this.modalCtrlr.create({
      component: GiveRatingsPopupPage,
      cssClass: 'give_ratings',
      showBackdrop: true
    });
    modal.present();

    const {data, role}= await modal.onWillDismiss();
    if(role === 'sendFeedback'){
      console.log(data);
    }
  }
  async openCancelBookingModal(){
    const modal = await this.modalCtrlr.create({
      component:CancelBookingPopupPage,
      cssClass: 'cancel_booking',
      showBackdrop:true
    });
    modal.present();
    const {data, role} = await modal.onWillDismiss();
    if(role === 'cancelBooking'){
      console.log(data);
    }
  }
  homeTab(){
    this.navCtrlr.navigateRoot('home-cars-after-login');
  }
  messagesTab(){
    this.navCtrlr.navigateRoot('messages');
  }
  bookingTab(){
    this.navCtrlr.navigateRoot('bookings');
  }
  favoriteTab(){
    this.navCtrlr.navigateRoot('favorites');
  }

  showDetails(){
    if(this.previousItemdetails == true || this.upcomingItemdetails == true){
      this.previousItemdetails = false;
      this.upcomingItemdetails = false;
    }
    else if(this.previousItemdetails == false || this.upcomingItemdetails == false){
      this.previousItemdetails = true;
      this.upcomingItemdetails = true;

    }
    
  }

  startCarBooking(){
    this.navCtrlr.navigateRoot('car-booking');
  }
}
