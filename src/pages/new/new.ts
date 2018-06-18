import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  @ViewChild('tAreaInput') tAreaInput;

  txtArea: string = '';
  error: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.tAreaInput.setFocus();
    }, 600);
  }

  public createNewQR() {
    if (this.txtArea != '') {

      // this.api.sendText(this.txtArea).subscribe(
      //   res => {
      //     if (res)
      //       this.navCtrl.push(InfoPage, {
      //         'id': res.chave,
      //         'txt': this.txtArea
      //       });
      //     else
      //       this.error = res.error;
      //   },
      //   err => this.error = err
      // );

      this.navCtrl.push(InfoPage, {
        'id': 'asd23sa12d',
        'txt': this.txtArea
      });

    }
    else
      this.error = 'Campo vazio!';
  }

}
