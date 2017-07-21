import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any = [];
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    c_password: '',
    addy: '',
    unit: '',
    city: '',
    state: ''
  };
   display = {'display' : 'none'};
  onSubmit(user) {
    this.users = user;
    this.display = {'display' : 'block'};
  }
}
