import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-live-chat-screen',
  templateUrl: './live-chat-screen.page.html',
  styleUrls: ['./live-chat-screen.page.scss'],
})
export class LiveChatScreenPage implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
