import { Component, OnInit, OnDestroy } from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../exercise.model';
import {NgForm} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
@Component({
  selector: 'fitness-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  constructor(
    private ts:TrainingService,
  ) { }
  exerciseSubscription:Subscription;

  exercises:Exercise[];
  ngOnInit() {
    this.exerciseSubscription=this.ts.exercisesChanged.subscribe(exercises=>{
      this.exercises=exercises;
    })
    this.ts.fetchAvailableExercises();
  }

  onStartTraining(exerciseForm:NgForm){
    this.ts.startExercise(exerciseForm.value.Exercise);
  }

  ngOnDestroy(){
    this.exerciseSubscription.unsubscribe();
  }
}
