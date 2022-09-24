import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-message-owner-side',
  templateUrl: './message-owner-side.page.html',
  styleUrls: ['./message-owner-side.page.scss'],
})
export class MessageOwnerSidePage implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
