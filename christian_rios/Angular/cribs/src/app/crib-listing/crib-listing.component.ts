import { UtilService } from './../services/util.service';
import { Component, OnInit } from '@angular/core';
import { CribsService } from '../services/cribs.service';
import { Http } from '@angular/http';

@Component({
  selector: 'crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'area',
    'bathroom',
    'bedrooms',
    'price' 
  ]

  constructor(
    private http: Http, 
    private cribsService: CribsService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
      
      this.cribsService.getCribs()
        .subscribe(
          data => this.cribs = data,
          error => this.error = error.statusText
        );
      this.cribsService.newCribSubject.subscribe(
        data => this.cribs = [data, ...this.cribs]
      );
  }

}
