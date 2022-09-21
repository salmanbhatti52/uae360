import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  previous_tab = true;
  upcoming_tab = false;
  constructor() { }

  ngOnInit() {
  }
  previousTab(tabVal){
    if(tabVal = 'previous'){
      console.log(tabVal);
      this.previous_tab = true;
      this.upcoming_tab = false;
      console.log(this.previous_tab);
      console.log(this.upcoming_tab);
    }
  }
  upcomingTab(tabVal){
    if(tabVal = 'upcoming'){
      console.log(tabVal)
      this.upcoming_tab = true;
      this.previous_tab = false;
      console.log(this.upcoming_tab);
      console.log(this.previous_tab);
    }
  }
}
