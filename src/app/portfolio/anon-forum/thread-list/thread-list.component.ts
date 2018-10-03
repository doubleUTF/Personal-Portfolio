import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Thread} from './thread.model';
@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  threads:Thread[];
  ngOnInit() {
    this.route.data.subscribe((data)=>{
      this.threads=data.threads;
    })
  }

}
