import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-recents',
  templateUrl: 'recents.html',
})
export class RecentsPage {

  recentQRs;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider
  ) {
    this.api.getRecents().then(
      list => this.recentQRs = list
    )
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RecentsPage');
  }

  openQR(item) {
    this.navCtrl.push(InfoPage, {
      'id': item.id,
      'txt': item.txt
    });
  }

  splice (item) {
    if (item && item.length > 30)
      return item.slice(0, 27) + "...";
    else
      return item;
  }

}
