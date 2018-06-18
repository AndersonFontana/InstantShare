import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ApiProvider } from '../../providers/api';


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
    private barcodeScanner: BarcodeScanner,
    private api: ApiProvider
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ScanPage');
  }

  public retrieveQR() {
    this.erro = '';
    if (this.code != '') {

      this.api.receiveText(this.code).subscribe(
        res => {
          if (res)
            this.navCtrl.push(InfoPage, {
              'id': this.code,
              'txt': res.value
            });
        },
        err => this.erro = err
      );
    
    }
    else
      this.erro = 'Campo vazio!';
  }

  public readQR() {

    this.barcodeScanner.scan().then(
      barcodeData => this.code = barcodeData.text
    ).catch(
      err => this.erro = err
    );

  }

}
