import {User} from './user.model';
import {AuthData} from './auth-data.model';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{
  constructor(
    private router:Router,
  ){}

  authChange= new Subject<boolean>();
  private user: User;

  registerUser(authData:AuthData){
    this.user = {
      email:authData.email,
      userId:Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessful();
  }

  login(authData:AuthData){
    this.user = {
      email:authData.email,
      userId:Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessful();
  }

  logout(){
    this.user=null;
    this.authChange.next(false);
    this.router.navigate(['portfolio','fitness-tracker','login'])
  }

  getUser(){
    return {...this.user};
  }

  isAuth(){
    return this.user!=null;
  }

  private authSuccessful(){
    this.authChange.next(true)
    this.router.navigate(['portfolio','fitness-tracker','training'])
  }
}
