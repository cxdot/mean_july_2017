import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser = {};
  questions: any[] = [];

  constructor(private _userService:UserService, private _questionService:QuestionService, private router:Router) { }

  ngOnInit() {
    this.isLoggedIn();
    this.getCurrentUser();
    this.getQuestions();
  }

  getCurrentUser(){
    this.isLoggedIn();
    this.currentUser = this._userService.getCurrentUser();
  }

  delete(id: string) {
    console.log(id)
    return this._questionService.delete(id)
    .then(question => {
      if(question.error){
        console.log("broken")
      } else {
        this.router.navigateByUrl('/dashboard')
      }
    })
  }

  logout(){
    this._userService.logout();
    this.router.navigateByUrl('/');
  }

  isLoggedIn(){
    if(this._userService.getCurrentUser() == null){
      this.router.navigateByUrl('/');
    }
  }
  getQuestions(){
    return this._questionService.index()
    .then(questions => this.questions = questions)
    .catch(err => console.log(err));
  }
}
