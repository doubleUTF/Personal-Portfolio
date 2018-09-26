import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18)
  }

  signUpForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    birthdate:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(6)]),
    agree:new FormControl(false,Validators.requiredTrue)
  })

  onSubmit(){
    this.authService.registerUser({
      email:this.signUpForm.value.email,
      password:this.signUpForm.value.password
    })
  }
  maxDate:Date;
}
