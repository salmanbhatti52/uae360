import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseURL:any = 'https://360uae.eigix.net/api';
  constructor(private http:HttpClient, 
    public toastController:ToastController) { }

  sendRequest(action, data){
    let header;
    
    header = new HttpHeaders({
      "Content-Type" : "application/json"
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
}
