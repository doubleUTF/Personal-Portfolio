import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable,throwError }             from 'rxjs';
import { map, take, catchError }              from 'rxjs/operators';
import {IssueTrackerService} from '../issue-tracker.service';

@Injectable()
export class IssueListResolver implements Resolve<any> {
  constructor(private itService: IssueTrackerService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<any> | boolean{

    let project=route.params.project;
    return this.itService.getIssues(project).pipe(
      take(1),
      map((issueList:Array<any>) => {
        if (issueList.length==0) {
          return this.router.navigate(['/portfolio','issue-tracker']);
        }
        return issueList;
      }),
      catchError((error)=>{
        this.router.navigate(['/portfolio','issue-tracker']);
        return throwError(error.error.error)
      })
    );
  }
}
