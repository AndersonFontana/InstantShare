import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  code: string = '';
  erro: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ScanPage');
  }

  public retrieveQR() {
    this.navCtrl.push(InfoPage, {
      'id': this.code,
      'txt': 'fsdfdgfdgs fdg \ns ddiadfjasndvad\nfsdfdgfdgs fdg \ns ddiadfjasndvad\n'
    });
  }

  public readQR() {

    this.barcodeScanner.scan().then(
      barcodeData => this.code = barcodeData.text
    ).catch(
      err => this.erro = err
    );

  }

}
