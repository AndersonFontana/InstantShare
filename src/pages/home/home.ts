import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewPage } from '../new/new';
import { ScanPage } from '../scan/scan';
import { RecentsPage } from '../recents/recents';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {
  }

  public newQR() {
    this.navCtrl.push(NewPage);
  }

  public readQR() {
    this.navCtrl.push(ScanPage);
  }

  public showRecents() {
    this.navCtrl.push(RecentsPage);
  }


}
