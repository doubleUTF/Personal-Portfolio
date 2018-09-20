import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

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
    console.log(this.signUpForm)
  }
  maxDate:Date;
}
