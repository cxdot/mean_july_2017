import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { }

  getCribs() {
    return this.http.get('data/cribs.json').map(res => res.json());
  }

  addCrib (data) {
    data.image = 'default-image';
    this.newCribSubject.next(data);
  }


}
