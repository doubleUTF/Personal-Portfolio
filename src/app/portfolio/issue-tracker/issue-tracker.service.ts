import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subject, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueTrackerService {
  rootPath= environment.production ? 'https://www.davidlau.xyz/api/issues' : 'http://localhost:3000/api/issues'

  getProjects(){
    return this.http.get(this.rootPath)
  }

  getIssues(project:string){
    return this.http.get(`${this.rootPath}/${project}`)
  }

  getIssue(id:string,project:string){
    let options={params:new HttpParams().set('id',id)}
    return this.http.get(`${this.rootPath}/${project}/issue`,options)
  }

  deleteIssue(id:string,project:string){
    let options={params:new HttpParams().set('_id',id)}
    return this.http.delete(`${this.rootPath}/${project}`,options).pipe(
      catchError((error)=>{
        return of(`Error: ${error.error.error}`)
      })
    )
  }

  postIssue(){

  }

  putIssue(){

  }
  constructor(
    private http:HttpClient
  ) { }

  searchMode: Subject<string>= new Subject();
  projectSearchSubject: Subject<string>= new Subject();
  issueSearchSubject:Subject<string>=new Subject();
  clearSubject: Subject<boolean>=new Subject();
  snackBarSubject:Subject<string>= new Subject();
}
