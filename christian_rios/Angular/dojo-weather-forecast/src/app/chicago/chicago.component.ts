import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
weather;
temp;
highTemp;
lowTemp;
humidity;
status;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.weather = this._httpService.getCity('chicago')
    .then( weather => {
      console.log(weather);
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.temp = Math.floor(this.temp * (9 / 5) - 459.67);
      this.highTemp = weather.main.temp_max;
      this.highTemp = Math.floor(this.highTemp * (9 / 5) - 459.67);
      this.lowTemp = weather.main.temp_min;
      this.lowTemp = Math.floor(this.lowTemp * (9 / 5) - 459.67);
      this.status = weather.weather[0].description;
    });
  }
}
