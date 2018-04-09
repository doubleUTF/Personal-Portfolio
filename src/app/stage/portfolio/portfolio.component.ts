import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.projects)
  }

  projects:Project[]=[
    new Project('Build a Tribute Page', 2016,
    'Beginner project on FreeCodeCamp',
    "http://codepen.io/doubleUTF/pen/yaLbGL/image/small.png",
    "https://codepen.io/doubleUTF/pen/yaLbGL"),
    new Project("Simon Game", 2017,
    "Classic 80's Game",
    "../../../assets/img/simon.JPG",
    "https://codepen.io/doubleUTF/pen/qPyJaX"
    ),
    new Project('Tic Tac Toe', 2017,
    'Original Tic Tac Toe game made using minimax algorithm',
    "../../../assets/img/ttt.jpg",
    "https://codepen.io/doubleUTF/pen/MvqKGO"
      ),
    new Project('Wiki Viewer', 2017,
      'Custom view of random or searched wiki articles.',
    "../../../assets/img/wiki_viewer.jpg",
    "https://codepen.io/doubleUTF/pen/ZJzaeo"),
    new Project('Calculator', 2017,
    "Javascript implementation of a basic calculator",
    "../../../assets/img/calc.jpg",
    "https://codepen.io/doubleUTF/pen/XajMGM"
    ),
    new Project('Pomodoro Clock', 2017,
    'Timer app with progress animation',
    "../../../assets/img/pomodoro_clock.jpg",
    "https://codepen.io/doubleUTF/pen/KvWYrx"
    ),
    new Project('Alex Lau Acupuncture', 2017,
    'Business page for prominent acupuncture clinic',
    "../../../assets/img/alex_lau_acupuncture.jpg",
    "http://aculau.com"
    )

  ];

}
