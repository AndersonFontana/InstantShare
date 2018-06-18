import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';


@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  id: string;
  txt: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private clipboard: Clipboard
  ) {
    this.id  = this.navParams.get('id');
    this.txt = this.navParams.get('txt');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  copy2ClipBoard() {
    this.clipboard.copy(this.txt);
  }

  go2Home() {
    this.navCtrl.popToRoot();
  }

}
