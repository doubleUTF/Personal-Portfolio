import { Component, OnInit, Input, ViewChild, ElementRef,Renderer2, HostBinding } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Project} from '../project/project.model';

@Component({
  selector: 'app-project-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.css']
})
export class ProjectThumbnailComponent implements OnInit {

  constructor(
    private renderer:Renderer2,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
  }

  @ViewChild('link') linkRef:ElementRef;
  @ViewChild('internalLink') internalRef:ElementRef;
  internalListener:()=>void;

  @Input() project:Project;
  activateLink(){
    if (this.project.link){
      setTimeout(()=>{
        this.renderer.setAttribute(this.linkRef.nativeElement, 'href',
        this.project.link)
      },500)
    } else if (this.project.internalLink){
      setTimeout(()=>{
        this.internalListener=this.renderer.listen(this.internalRef.nativeElement,'click',()=>{
        this.router.navigate([this.project.internalLink], {relativeTo:this.route})
        })
      },500)
    }
  }

  deactivateLink(){
    if (this.project.link){
    this.renderer.removeAttribute(this.linkRef.nativeElement,'href');
  } else if (this.internalListener){
    this.internalListener();
  }
  }

}
