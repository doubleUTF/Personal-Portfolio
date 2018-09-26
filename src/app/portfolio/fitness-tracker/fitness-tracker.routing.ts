import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {FitnessTrackerComponent} from './fitness-tracker.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './training/training.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AuthGuard} from './auth/auth.guard';

const fitnessRoutes:Routes=[
  {path:'',component:FitnessTrackerComponent,children:[
    {path:'',component:WelcomeComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'training',component:TrainingComponent, canActivate:[AuthGuard]}
  ]},
]

@NgModule({
  imports:[RouterModule.forChild(fitnessRoutes)],
  exports:[RouterModule],
  providers:[AuthGuard]
})

export class FitnessRoutesModule{}
