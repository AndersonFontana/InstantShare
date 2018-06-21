import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { ApiProvider } from '../../providers/api';


@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  QR = {id: '', txt: ''};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private clipboard: Clipboard,
    private api: ApiProvider
  ) {
    this.QR.id  = this.navParams.get('id');
    this.QR.txt = this.navParams.get('txt');
    this.api.add2Recents(this.QR);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InfoPage');
  }

  copy2ClipBoard() {
    this.clipboard.copy(this.QR.txt);
  }

  go2Home() {
    this.navCtrl.popToRoot();
  }

}
