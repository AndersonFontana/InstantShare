import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  url_base = '...kressin...';

  constructor(public http: Http) {
    // console.log('Hello ApiProvider Provider');
  }

  public sendText(text: string) {

    let endPoint = '...';
    let obj = {
      'text': text
    };

    return this.http.post(this.url_base + endPoint, obj).map(
      (res: Response) => res.json(),
      err => err
    )
  }

  public receiveText(id: string) {

    let endPoint = '...';
    
    return this.http.get(this.url_base + endPoint + 'id=' + id).map(
      (res: Response) => res.json(),
      err => err
    )
  }

}
