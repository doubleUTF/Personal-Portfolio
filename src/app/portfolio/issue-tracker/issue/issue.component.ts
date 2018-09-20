import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      console.log(params)
    })
  }

}
