import { Component, OnInit, Input, ViewChild, ElementRef,Renderer2 } from '@angular/core';
import {Project} from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private renderer:Renderer2) { }

  ngOnInit() {
  }

  @ViewChild('link') linkRef:ElementRef;

  @Input() project:Project;
  activateLink(){
    if (this.project.link){
      setTimeout(()=>{
        this.renderer.setAttribute(this.linkRef.nativeElement, 'href',
        this.project.link)
      },500)
    }
  }

  deactivateLink(){
    if (this.project.link){
    this.renderer.removeAttribute(this.linkRef.nativeElement,'href')
    }
  }
}
