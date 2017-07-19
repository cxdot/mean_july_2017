import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: any = [];
  constructor() {
    for (let i = 0; i < 5; i++) {
      const num = Math.floor((Math.random() * 5) ) + 1;
      if (num === 1) {
        this.colors.push('#EE80E5');
      } else if (num === 2) {
        this.colors.push('#D2FBC1');
      } else if (num === 3) {
        this.colors.push('#B7F7CD');
      } else if (num === 4) {
        this.colors.push('#ACE9E2');
      } else if (num === 5) {
        this.colors.push('#A8DBF8');
      }
      }
    }
  }
