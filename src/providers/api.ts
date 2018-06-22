import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  urlBase = 'http://appsmoveis.kressin.com.br/ws/';
  jsonHeader = { headers: new Headers({ 'Content-Type': 'application/json' }) };

  constructor(
    public http: Http,
    private storage: Storage
  ) {
    // console.log('Hello ApiProvider Provider');
  }

  public sendText(text: string) {

    let endPoint = 'dados.php';
    let obj = { 'type': 'txt', 'value': text };

    return this.http.post(this.urlBase + endPoint, obj, this.jsonHeader).map(
      (res: Response) => res.json(),
      err => err
    )
  }

  public receiveText(id: string) {

    let endPoint = 'dados.php';

    return this.http.get(this.urlBase + endPoint + '?id=' + id).map(
      (res: Response) => res.json(),
      err => err
    )
  }

  public add2Recents(item: { id: string, txt: string }) {
    let newList = [];
    newList.push(item);

    this.storage.get('recentQRs').then((val) => {
      let recentQRs = val || [];
      let maxListSize = 20;
      recentQRs.forEach(QR => {
        if (QR.id != item.id && --maxListSize > 0) // manter a lista com 'maxListSize' elementos
          newList.push(QR);
      });

      this.storage.set('recentQRs', newList);
    }).catch(
      err => this.storage.set('recentQRs', newList)
    );
  }
  public getRecents() {
    return this.storage.get('recentQRs');
  }

}
