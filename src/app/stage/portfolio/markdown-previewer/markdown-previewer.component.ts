import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown-previewer',
  templateUrl: './markdown-previewer.component.html',
  styleUrls: ['./markdown-previewer.component.css']
})
export class MarkdownPreviewerComponent implements OnInit {

  constructor() { }

  textValue:string=
  `Markdown Previewer
==
Parser by [Marked.js](https://marked.js.org)

---
__What is Markdown?__

Markdown is a simple and easy markup language easily converted into HTML and rich text.

__Who uses Markdown?__

To name a few organizations:
1. [Github](www.github.com)
2. [StackExchange](https://stackexchange.com/)
3. [Reddit](www.reddit.com)

---
Go ahead, try markdown yourself! Here is a [link](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to a cheatsheet of Markdown syntax.`;

  ngOnInit() {

  }
}
