import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppointmentService } from './../appointment.service';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  errors: string[] = [];
  newAppointment = {user: ''};
  currentUser = { _id: ''};
  today = Date.now();
  
  constructor(
    private _appointmentService: AppointmentService,
    private _userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.isLoggedIn();
  }

  

  createAppointment(){
    console.log("creating a appointment")
    this.errors = [];
    this.newAppointment.user = this.currentUser._id;
    return this._appointmentService.create(this.newAppointment)
    .then(appointment => {
      if(appointment.errors){
        for(let key in appointment.errors){
          let error = appointment.errors[key];
          this.errors.push(error.message)
        }
      }
       else {
        this.router.navigateByUrl('/dashboard')
      }
    })
  .catch(err => console.log(err));
  }

  getCurrentUser(){
  this.isLoggedIn();
  this.currentUser = this._userService.getCurrentUser();
  }

  isLoggedIn(){
    if(this._userService.getCurrentUser() == null){
      this.router.navigateByUrl('/');
    }
  }

}