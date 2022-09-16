import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Browse', url: '/home-before-login', img: 'assets/images/icons/sm_search_icon.svg' },
    { title: 'Contact support', url: '/folder/Outbox', img: 'assets/images/icons/sm_telephone_icon.svg' },
    { title: 'Login or Signup', url: '/sign-in', img: 'assets/images/icons/sm_in_out.svg' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public menu:MenuController) {}
  closeMenu(){
    this.menu.close();
  }
}
