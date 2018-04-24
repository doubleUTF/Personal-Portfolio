import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {} from 'marked';

@Component({
  selector: 'app-markdown-previewer',
  templateUrl: './markdown-previewer.component.html',
  styleUrls: ['./markdown-previewer.component.css']
})
export class MarkdownPreviewerComponent implements OnInit {

  // @ViewChild('inputForm') form:ElementRef;

  constructor() { }

  textValue:string='';
  ngOnInit() {
    // console.log(this.form)
  }
  ngOnChanges(){
    // console.log(this.form.nativeElement.textContent)
  }
}
