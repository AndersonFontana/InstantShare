import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { ApiProvider } from '../../providers/api';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  @ViewChild('tAreaInput') tAreaInput;

  txtArea: string = '';
  erro: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: ApiProvider
  ) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.tAreaInput.setFocus();
    }, 600);
  }

  public createNewQR() {
    this.erro = '';
    if (this.txtArea != '') {

      this.api.sendText(this.txtArea).subscribe(
        res => {
          if (res)
            this.navCtrl.push(InfoPage, {
              'id': res.id,
              'txt': this.txtArea
            });
          else
            this.erro = res;
        },
        err => this.erro = err
      );

      // this.navCtrl.push(InfoPage, {
      //   'id': 'asd23sa12d',
      //   'txt': this.txtArea
      // });

    }
    else
      this.erro = 'Campo vazio!';
  }

}
