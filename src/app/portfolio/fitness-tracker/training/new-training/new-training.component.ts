import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../exercise.model';

@Component({
  selector: 'fitness-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart=new EventEmitter<void>();
  constructor(
    private ts:TrainingService,
  ) { }

  exercises:Exercise[];
  ngOnInit() {
    this.exercises=this.ts.getAvailableExercises();
  }

  onStartTraining(){
    this.trainingStart.emit();
  }
}
