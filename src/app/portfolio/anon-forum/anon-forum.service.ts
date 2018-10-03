import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnonForumService {

  constructor(private http:HttpClient) {
    environment.production ? this.rootPath = 'https://www.davidlau.xyz/api' : this.rootPath= 'http://localhost:3000/api'
  }

  rootPath;
  getBoards(){
    return this.http.get(`${this.rootPath}/threads`)
  }

}
