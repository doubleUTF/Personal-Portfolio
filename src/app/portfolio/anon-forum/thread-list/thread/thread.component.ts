import { Component, OnInit } from '@angular/core';
import {AnonForumService} from '../../anon-forum.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private afService: AnonForumService) { }

  ngOnInit() {
    this.afService.appState.next('thread');
  }

}
