import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class AppointmentService {

  constructor(private _http:Http) { }

  index(){
    return this._http.get('/appointments').map(data => data.json()).toPromise()
  }

  create(appointment){
    return this._http.post('/appointments', appointment).map(data => data.json()).toPromise()
  }

  delete(id){
    return this._http.put(`/appointments/${id}`, {}).map(data => data.json()).toPromise()
  }
}
