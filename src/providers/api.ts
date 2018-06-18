import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  urlBase = 'http://appsmoveis.kressin.com.br/ws/';
  jsonHeader = { headers: new Headers({ 'Content-Type': 'application/json' }) };

  constructor(public http: Http) {
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

}
