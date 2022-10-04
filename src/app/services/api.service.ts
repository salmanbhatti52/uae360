import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL:any = 'https://360uae.eigix.net/api';
  constructor(private http:HttpClient) { }

  sendRequest(action, data){
    return this.http.post(`${this.baseURL}/${action}`, JSON.stringify(data), {

    });

  }
}
