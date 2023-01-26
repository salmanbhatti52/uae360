import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  carDataById:any;
  imageUrlString = 'https://360uae.eigix.net/public/';
  baseURL:any = 'https://360uae.eigix.net/api';
  datesToDisable = [];
  bookedDates = [];
  bookingResponse:any;
  googleSignInResponse:any;
  localUserData:any;
  fetchLocation:any;
  oneSignalUserId:any;
  companyId: any;
  toggleVal:any;
  allCars: any;
  showNewBookings: string;
  constructor(private http:HttpClient, 
    public toastController:ToastController,
    public loadingCtrl:LoadingController) { }

  sendRequest(action, data?){
    let header;
    
    header = new HttpHeaders({
      "Content-Type" : "application/json",
    });

    return this.http.post(`${this.baseURL}/${action}`,JSON.stringify(data), {
      headers:header,
    });

  }

  getData(action){
    let header;
    
    header = new HttpHeaders({
      "Content-Type" : "application/json"
    });

    return this.http.get(`${this.baseURL}/${action}`, {
      headers:header,
    });
  }

  
  async presentToast(toastMsg){
    const toast = await this.toastController.create({
      message:toastMsg,
      duration:2000,
    });
    toast.present();
  }

  async showLoading(){
    const loading = await this.loadingCtrl.create({
      duration:3000,
      message:'Please wait...'
    
    });
    loading.present();
  }

  hideLoading(){
    this.loadingCtrl.dismiss();
  }

  
}
