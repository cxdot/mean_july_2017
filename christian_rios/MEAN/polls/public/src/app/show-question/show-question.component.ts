import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {
currentUser = {};
param_id:string;
question = { optiononevotes: 0}

  constructor(
    private _questionService:QuestionService, 
    private _userService:UserService,  
    private router:Router, 
    private _route:ActivatedRoute,)
    {
    this._route.params.subscribe(param => this.param_id = param.id)
   }

  ngOnInit() {
    this.isLoggedIn();
    this.getQuestion();
  }

  getQuestion(){
    return this._questionService.show(this.param_id)
    .then(question => this.question = question)
    .catch(err => console.log(err));
  }


  isLoggedIn(){
    if(this._userService.getCurrentUser() == null){
      this.router.navigateByUrl('/');
    }
  }
 
}
