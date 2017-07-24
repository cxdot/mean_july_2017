// modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/Dallas' },
    {path: 'Dallas', component: DallasComponent },
    {path: 'Burbank', component: BurbankComponent },
    {path: 'Chicago', component: ChicagoComponent },
    {path: 'SanJose', component: SanjoseComponent },
    {path: 'Seattle', component: SeattleComponent },
    {path: 'Washington', component: WashingtonComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
