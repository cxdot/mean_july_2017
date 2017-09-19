import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './dashboard/question/question.component';
import { ShowQuestionComponent } from './show-question/show-question.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'new_question', component: QuestionComponent},
    { path: 'surveypoll/:id', component: ShowQuestionComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }