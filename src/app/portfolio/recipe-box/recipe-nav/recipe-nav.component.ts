import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-nav',
  templateUrl: './recipe-nav.component.html',
  styleUrls: ['./recipe-nav.component.css']
})
export class RecipeNavComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
  }

  button:string;

  getButtonMode(){
    // Checks the router to know which type of button should be displayed.
  }
}
