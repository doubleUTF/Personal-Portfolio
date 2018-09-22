import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable,throwError }             from 'rxjs';
import { map, take, catchError }              from 'rxjs/operators';
import {IssueTrackerService} from './issue-tracker.service';

@Injectable()
export class IssueResolver implements Resolve<any> {
  constructor(private itService: IssueTrackerService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | boolean{
    let id=route.queryParams.id;
    let project=route.params.project;
    if (!id) return true;
    return this.itService.getIssue(id,project).pipe(
      take(1),
      map(issue => {
        return issue;
      }),
      catchError((error)=>{
        this.router.navigate(['/portfolio','issue-tracker',project]);
        return throwError(error.error.error)
      })
    );
  }
}
