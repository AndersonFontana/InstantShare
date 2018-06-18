import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPage } from '../new/new';
import { ScanPage } from '../scan/scan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {
  }

  public newQR() {
    this.navCtrl.push(NewPage);
  }

  public readQR() {
    this.navCtrl.push(ScanPage);
  }


}
