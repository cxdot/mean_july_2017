import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {

    this._route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    })
   }

  ngOnInit() {
  }

}
