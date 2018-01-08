import { UtilService } from './../services/util.service';
import { CribsService } from './../services/cribs.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;

  propertyTypes: Array<string> = ['condo', 'duplex', 'house'];

  constructor(
    private cribsService: CribsService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }

  onCribSubmit(data) {
    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }
}
