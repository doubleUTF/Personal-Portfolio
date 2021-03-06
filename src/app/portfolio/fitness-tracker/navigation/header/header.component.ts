import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'fitness-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth:boolean;
  authSubscription: Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus;
    })
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

  onLogout(){
    this.authService.logout()
  }
}
