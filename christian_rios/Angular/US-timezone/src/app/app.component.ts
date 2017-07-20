import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today: any;
  tz: any;
  time: any;

  changeTime(timezone) {
    this.today = new Date();
    this.tz = 'CST';
    this.time = 'Central Standard Time:';
    if (timezone === 'EST') {
      this.today = this.today.setHours(this.today.getHours() + 1);
      this.tz = 'EST';
      this.time = 'Eastern Standard Time:';
    } else if (timezone === 'PST') {
        this.today = this.today.setHours(this.today.getHours() - 2);
        this.tz = 'PST';
        this.time = 'Pacific Standard Time:';
    } else if (timezone === 'MST') {
        this.today = this.today.setHours(this.today.getHours() - 1);
        this.tz = 'MST';
        this.time = 'Mountain Standard Time:';
    }
  }

  clearDate() {
    this.today = null;
    this.tz = null;
  }
}
