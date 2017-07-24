import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  getCity(city: string) {
    console.log('in the service');
    // tslint:disable-next-line:max-line-length
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6ad5a5f015da7905001dfc4f4a25064e`).map(data => data.json()).toPromise();
  }
}
