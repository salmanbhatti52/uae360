import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckUserService } from '../check-user.service';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-cancel-booking-popup',
  templateUrl: './cancel-booking-popup.page.html',
  styleUrls: ['./cancel-booking-popup.page.scss'],
})
export class CancelBookingPopupPage implements OnInit {
  cancel:string
  @Input() booking_id:any;
  @Input() hours_left:any;
  constructor(public modalCtrlr:ModalController,
    public checkUser:CheckUserService,
    public api:ApiService) { }

  ngOnInit() {
    console.log("hours_left",this.hours_left);
    
  }
  ngAfterViewInit(){
    
  }
  justCloseModal(){
    return this.modalCtrlr.dismiss(null, 'closeModal');
  }
  cancelBooking(){
    let data = {
      appuser_id: this.checkUser.appUserId,
      booking_id:this.booking_id,
      status: "Cancelled"
    }
    this.api.showLoading();
    this.api.sendRequest("cancel_booking",data).subscribe((res:any)=>{
      this.api.hideLoading();
      console.log("Response: ",res);
      if(res.status == 'success'){
        this.api.presentToast('Cancelled');
        return this.modalCtrlr.dismiss('Booking Canceled', 'cancelBooking');

      }else if(res.status == 'error'){
        this.api.presentToast(res.message);
        return this.modalCtrlr.dismiss('Booking Canceled', 'cancelBooking');
      }else{

      }
    },(err)=>{
      this.api.hideLoading();
      console.log("Error: ",err);
      this.modalCtrlr.dismiss();
    })
    
  }
}
