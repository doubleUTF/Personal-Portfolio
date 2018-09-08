import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {Exercise} from './exercise.model';

@Injectable()
export class ExerciseTrackerService{
  rootPath=environment.production ? 'https://www.davidlau.xyz/api' : 'http://localhost:3000/api';

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'my-auth-token'
    })
  }
  addUser(user:string):Observable<any>{
    return this.http.post<any>(`${this.rootPath}/exercise/new-user`,JSON.stringify({username:user}), this.httpOptions )
    .pipe(
      catchError(this.handleError)
    )
}

  private handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      // A client-side or network error occured.
      console.log('An error occured:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was ${error.error}`
    )
    // return an observable with a user-facing error message
    return throwError(`Something bad happened; please try again later`)
    }
  }

  addExercise(exercise:Exercise):Observable<any>{
    return this.http.post<any>(`${this.rootPath}/exercise/add`,JSON.stringify(exercise),this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  constructor(
    private http:HttpClient
  ){}
}
