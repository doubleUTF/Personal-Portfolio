import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';
import {Thread} from './thread.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ThreadListResolverService implements Resolve<Array<Thread>>{

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Array<Thread>>{
      let url:string;
      let board=route.params.board;
      environment.production? url= `https://www.davidlau.xyz/api/threads/${board}`
      : url= `http://localhost:3000/api/threads/${board}`
      return this.http.get(url).pipe(
        take(1),
        mergeMap((threads:Array<Thread>)=>{
          if (threads) return of(threads)
          this.router.navigate(['portfolio','anon-forum']);
          return EMPTY
        })
      )
  }

  constructor(private router:Router, private http:HttpClient) { }
}
