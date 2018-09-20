import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueTrackerService {
  rootPath= environment.production ? 'https://www.davidlau.xyz/api/issues' : 'http://localhost:3000/api/issues'
  getProjects(){
    return this.http.get(this.rootPath)
  }
  constructor(
    private http:HttpClient
  ) { }

  searchSubject: Subject<string>= new Subject();
  clearSubject: Subject<boolean>=new Subject();
}
