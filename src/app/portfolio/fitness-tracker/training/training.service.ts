import {Exercise} from './exercise.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

@Injectable()
export class TrainingService {
  constructor(
    private db:AngularFirestore
  ){}

  private availableExercises: Exercise[]=[];
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged= new Subject<Exercise[]>();
  private runningExercise: Exercise;
  private exercises:Exercise[]=[];

  fetchAvailableExercises(){
    this.db.collection('availableExercises')
    .snapshotChanges().pipe(
      map(docArray=>{
        return docArray.map(doc=>{
          return {
            id:doc.payload.doc.id,
            ...doc.payload.doc.data()
          }
        })
      })
    ).subscribe((exercises:Exercise[])=>{
      this.availableExercises=exercises;
      this.exercisesChanged.next([...exercises]);
    })
  }

  startExercise(selectedId:string){
    this.runningExercise={...this.availableExercises.find(ex=>ex.id===selectedId)}
    this.exerciseChanged.next(this.runningExercise)
  }

  completeExercise(){
    this.exercises.push({...this.runningExercise,date: new Date(), state:'completed'});
    this.runningExercise=null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress:number){
    this.exercises.push({...this.runningExercise,date:new Date(), state:'cancelled',
      duration:this.runningExercise.duration*progress/100,
      calories:this.runningExercise.calories*progress/100});
    this.runningExercise=null;
    this.exerciseChanged.next(null);
  }

  getRunningExercise(){
    return {...this.runningExercise}
  }

  getCompletedOrCancelledExercises(){
    return this.exercises.slice()
  }
}
