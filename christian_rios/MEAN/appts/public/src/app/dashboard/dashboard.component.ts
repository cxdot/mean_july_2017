import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AppointmentService } from '../appointment.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments: any[] = [];
  currentUser = {};
  today = Date.now()
  constructor(private _userService:UserService, private _appointmentService:AppointmentService, private router:Router) { }

  ngOnInit() {
    this.getAppointments();
    this.getCurrentUser();
    this.isLoggedIn();
  }

  onDelete(id: string) {
    console.log(id)
    return this._appointmentService.delete(id)
    .then(appointment => {
      if(appointment.error){
        console.log("broken")
      } else {
        this.getAppointments();
      }
    })
    .catch(err => console.log(err));
  }

  isLoggedIn(){
    if(this._userService.getCurrentUser() == null){
      this.router.navigateByUrl('/');
    }
  }

  logout(){
    this._userService.logout();
    this.router.navigateByUrl('/');
  }

  getAppointments(){
    return this._appointmentService.index()
    .then(appointments => this.appointments = appointments)
    .catch(err => console.log(err));
  }

  getCurrentUser(){
    this.isLoggedIn();
    this.currentUser = this._userService.getCurrentUser();
  }
}
