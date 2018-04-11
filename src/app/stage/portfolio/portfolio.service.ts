import {Project} from './project.model';

export class PortfolioService{

  getHeaders(projects:Project[],sortType:string){
    // Takes a list of projects and generates an array of headers based on type.
    // Or, generate an object with properties sortType and headers.
    // Headers will be another object with key value pairs with
    // header:projectName format.
    // example
    return { sortType:'A-Z',
    headers:{
      'A':[
        {name:'Appmaker'}
      ],
      'Q':[
        {name:'Quick Claim'}
      ],
    }

  }
  }

  projects:Project[]=[
    new Project('Build a Tribute Page', new Date(2016,8,2),
    'Beginner project on FreeCodeCamp',
    "http://codepen.io/doubleUTF/pen/yaLbGL/image/small.png",
    "https://codepen.io/doubleUTF/pen/yaLbGL"),
    new Project("Simon Game", new Date(2017,11,16),
    "Classic 80's Game",
    "../../../assets/img/simon.JPG",
    "https://codepen.io/doubleUTF/pen/qPyJaX"
    ),
    new Project('Tic Tac Toe', new Date(2017,9,12),
    'Original Tic Tac Toe game made using minimax algorithm',
    "../../../assets/img/ttt.jpg",
    "https://codepen.io/doubleUTF/pen/MvqKGO"
      ),
    new Project('Wiki Viewer', new Date(2017,6,26),
      'Custom view of random or searched wiki articles.',
    "../../../assets/img/wiki_viewer.jpg",
    "https://codepen.io/doubleUTF/pen/ZJzaeo"),
    new Project('Calculator', new Date(2017,7,6),
    "Javascript implementation of a basic calculator",
    "../../../assets/img/calc.jpg",
    "https://codepen.io/doubleUTF/pen/XajMGM"
    ),
    new Project('Pomodoro Clock', new Date(2017,7,25),
    'Timer app with progress animation',
    "../../../assets/img/pomodoro_clock.jpg",
    "https://codepen.io/doubleUTF/pen/KvWYrx"
    ),
    new Project('Alex Lau Acupuncture', new Date(2017,6,17),
    'Business page for prominent acupuncture clinic',
    "../../../assets/img/alex_lau_acupuncture.jpg",
    "http://aculau.com"
    )
  ];

  getProjects(){
    return this.projects;
  }
}
