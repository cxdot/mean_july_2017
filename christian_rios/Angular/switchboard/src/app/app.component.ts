import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches: any = [true, false, true, true, false, false, true, false, false, false];

  switch(i) {
    console.log(this.switches);
    this.switches[i] = !this.switches[i];
  }
}
