import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ApiApp} from '../api.model';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {ExerciseTrackerService} from './exercise-tracker.service';
import {customDateValidator} from './date-directive';
@Component({
  selector: 'app-exercise-tracker',
  templateUrl: './exercise-tracker.component.html',
  styleUrls: ['./exercise-tracker.component.css'],
  providers:[ExerciseTrackerService]
})
export class ExerciseTrackerComponent implements OnInit {

  constructor(
    private apiService:ApiService,
    private exService:ExerciseTrackerService
  ) { }

  ngOnInit() {
    this.exerciseApp=this.apiService.getApi('Exercise Tracker')
  }

  exerciseApp:ApiApp;
  userName=new FormControl('',Validators.required)
  userResponse:string;

  exerciseForm=new FormGroup({
    userId:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    duration:new FormControl('',[Validators.pattern(/\d+/), Validators.required]),
    date:new FormControl('', customDateValidator)
  })
  exerciseResponse:string;

  addUser(){
    this.exService.addUser(this.userName.value).subscribe(resp=>{
      this.userResponse=JSON.stringify(resp)
    })
  }

  exerciseSubmit(){
    this.exService.addExercise(this.exerciseForm.value).subscribe(resp=>{
      this.exerciseResponse=JSON.stringify(resp)
    })
  }

}
