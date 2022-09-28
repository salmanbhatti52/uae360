import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  startDate = localStorage.getItem('startDate')
  endDate = localStorage.getItem('endDate')
  startTime = localStorage.getItem('startTime')
  endTime = localStorage.getItem('endTime')
  constructor(public location:Location) { }

  ngOnInit() {
    console.log(this.startDate);
    console.log(this.endDate);
    console.log(this.startDate);
    console.log(this.endTime);
    
  }
  goBack(){
    this.location.back();
  }
}
