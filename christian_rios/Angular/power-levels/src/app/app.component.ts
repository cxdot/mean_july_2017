import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: any = [];
  initial = { power: 0};
  newPower = 0;
  human: any;
  saiyan: any;
  supersaiyan: any;
  supersaiyan2: any;
  supersaiyan3: any;
  supersaiyan4: any;

  comp = {
    'display' : 'inline-block',
    'vertical-align' : 'top',
    'width' : '280px',
    'height' : '150px',
    'padding' : '5px',
    'border' : '1px solid black',
    'background-color' : 'yellow',
    'margin' : '10px 10px',
    'text-align' : 'left',
  };

  constructor() {
    for (let i = 1; i < 101; i++) {
      this.num.push(i);
    }
  }

  calculate(power) {
    console.log(power);
    this.initial.power = this.newPower;
    this.human = power * 1;
    this.saiyan = power * 10;
    this.supersaiyan = power * 90;
    this.supersaiyan2 = power * 150;
    this.supersaiyan3 = power * 250;
    this.supersaiyan4 = power * 500;
  }

}
