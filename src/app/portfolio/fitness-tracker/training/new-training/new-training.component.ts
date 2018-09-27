import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../exercise.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'fitness-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  constructor(
    private ts:TrainingService,
  ) { }

  exercises:Exercise[];
  ngOnInit() {
    this.exercises=this.ts.getAvailableExercises();
  }

  onStartTraining(exerciseForm:NgForm){
    this.ts.startExercise(exerciseForm.value.Exercise);
  }
}
