import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnonForumService {

  appState=new Subject();
  constructor(private http:HttpClient) {
    environment.production ? this.rootPath = 'https://www.davidlau.xyz/api' : this.rootPath= 'http://localhost:3000/api'
  }

  rootPath;
  getBoards(){
    return this.http.get(`${this.rootPath}/threads`)
  }

  getThread(threadId){
    let params= new HttpParams().set('thread_id',threadId);
    return this.http.get(`${this.rootPath}/replies`,{params});
  }

  addReply(threadId,text,delete_password){
    return this.http.post(`${this.rootPath}/replies`,{text,delete_password,thread_id:threadId})
  }

  deleteReply(replyId,password){
    return this.http.request('delete',`${this.rootPath}/replies`,
    {body:{reply_id:replyId,delete_password:password}})
  }

  reportReply(replyId){
    return this.http.put(`${this.rootPath}/replies`,{reply_id:replyId})
  }
}
