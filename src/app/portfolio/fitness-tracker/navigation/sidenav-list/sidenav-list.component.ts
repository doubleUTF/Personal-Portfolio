import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'fitness-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav= new EventEmitter<void>();
  constructor(private authService:AuthService) { }
  isLoggedIn:boolean=false;
  loggedSubscription:Subscription;
  ngOnInit() {
    this.loggedSubscription=this.authService.authChange.subscribe(authData=>{
      this.isLoggedIn=authData
    })
  }
  onClose(){
    this.closeSidenav.emit()
  }

  ngOnDestroy(){
    this.loggedSubscription.unsubscribe()
  }

  onLogout(){
    this.onClose();
    this.authService.logout()
  }
}
