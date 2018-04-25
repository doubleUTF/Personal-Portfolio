import {Project} from './project/project.model';
import {MOST_RECENT,EARLIEST,A_to_Z,Z_to_A} from './sort-options.model';
import {groupBy, sortBy} from 'lodash';

export class PortfolioService{

  getSortedData(projects:Project[],sortType:string){
    // Takes a list of projects and generates an array of headers based on type.
    // Or, generate an object with properties sortType and headers.
    // Headers will be another object with key value pairs with
    // header:projectName format.

    switch(sortType){
      case MOST_RECENT:
        var sorted=sortBy(projects,'date').reverse();
        var headersObj=groupBy(sorted,(project:Project)=>{
          return project.date.getFullYear()
        })
        var sortedHeaders=Object.keys(headersObj).sort((a:any,b:any)=>b-a);
        return {
          headersObj,
          sortedHeaders
        }
      case EARLIEST:
        var sorted=sortBy(projects,'date');
        var headersObj=groupBy(sorted,(project:Project)=>{
          return project.date.getFullYear()
        });
        var sortedHeaders=Object.keys(headersObj).sort((a:any,b:any)=>a-b);
        return {headersObj,sortedHeaders};
      // case A_to_Z:
      //   var sorted=sortBy(projects,'name');
      //   var headersObj=groupBy(sorted, (project:Project)=>{
      //     return project.name[0].toUpperCase()
      //   });
      //   var sortedHeaders=Object.keys(headersObj).sort((a:any,b:any)=>a-b);
      //   return {headersObj,sortedHeaders};
      // case Z_to_A:
      //   var sorted=sortBy(projects,'name').reverse();
      //   var headersObj=groupBy(sorted, (project:Project)=>{
      //     return project.name[0].toUpperCase()
      //   });
      //   var sortedHeaders=Object.keys(headersObj).sort((a:any,b:any)=>b-a);
      //   return {headersObj,sortedHeaders}
    }
  }

  projects:Project[]=[
    new Project('Build a Tribute Page', new Date(2016,8,2),
    'Beginner project on FreeCodeCamp. A tribute to the late Harambe.',
    "../../../assets/img/harambe.png",
    "https://codepen.io/doubleUTF/full/yaLbGL"),
    new Project("Simon Game", new Date(2017,11,16),
    "Classic 80's game of memorization. Built with jQuery and SVG.js.",
    "../../../assets/img/simon.JPG",
    "https://codepen.io/doubleUTF/full/qPyJaX"
    ),
    new Project('Tic Tac Toe', new Date(2017,9,12),
    'Original Tic Tac Toe game made using minimax algorithm.',
    "../../../assets/img/ttt.jpg",
    "https://codepen.io/doubleUTF/full/MvqKGO"
      ),
    new Project('Wiki Viewer', new Date(2017,6,26),
      'Custom view of random or searched wiki articles.',
    "../../../assets/img/wiki_viewer.jpg",
    "https://codepen.io/doubleUTF/full/ZJzaeo"),
    new Project('Calculator', new Date(2017,7,6),
    "Javascript implementation of a basic calculator.",
    "../../../assets/img/calc.jpg",
    "https://codepen.io/doubleUTF/full/XajMGM"
    ),
    new Project('Pomodoro Clock', new Date(2017,7,25),
    'Timer app with progression animation.',
    "../../../assets/img/pomodoro_clock.jpg",
    "https://codepen.io/doubleUTF/full/KvWYrx"
    ),
    new Project('Alex Lau Acupuncture', new Date(2017,6,17),
    'Business site for well-respected acupuncturist.',
    "../../../assets/img/alex_lau_acupuncture.jpg",
    "http://aculau.com"
  ),
    new Project('2048', new Date(2016,0,24),
    'Python implementation of 2048 game.',
    "../../../assets/img/2048.jpg",
    "http://www.codeskulptor.org/#user44_crOfOki3Wo_30.py"
  ),
    new Project('Word Wrangler', new Date(2016,4,24),
  'Choose a word and guess the possible anagrams. Created with Python.',
      "../../../assets/img/word_wrangler.jpg",
  'http://www.codeskulptor.org/#user41_VC79f4Cojy_23.py'
  ),
  new Project('Rice Rocks', new Date(2015,10,6),
  "Course project implementation of classic arcade space shooter.",
  "../../../assets/img/rice_rocks.jpg",
  "http://www.codeskulptor.org/#user40_l6gHGx2RlW_20.py"
  ),
  new Project('Pong', new Date(2015,10,5),
  "Python implementation of classic Pong game.",
  "../../../assets/img/pong.jpg",
  "http://www.codeskulptor.org/#user40_dbaqzUVAZt_31.py"
  ),
  new Project('Blackjack', new Date(2015,9,6),
  "Python implementation of casino blackjack game.",
  "../../../assets/img/blackjack.jpg",
  "http://www.codeskulptor.org/#user40_guLBb4KGeY_4.py"),
  new Project('Fifteen Puzzle', new Date(2016,5,6),
  "Fifteen puzzle game solver, solves all valid game combinations.",
  "../../../assets/img/fifteen_puzzle.JPG",
  "http://www.codeskulptor.org/#user41_xgKw1wSt6T_115.py"
  ),
  new Project('Personal Portfolio', new Date(2018,3,13),
  "Personal portfolio to showcase work history. Built with Angular and Bootstrap.",
  "../../../assets/img/david_lau_portfolio.jpg",
  ),
  new Project('Nike Gift Card Checker', new Date(2018,3,4),
  "Client-requested custom app to bulk check Nike Gift Cards.",
  "../../../assets/img/nike_gc_checker.jpg",
  "https://safe-cliffs-59961.herokuapp.com/"),
  new Project('Quick Claim', new Date(2016,9,20),
  "Chrome extension to create speedier and smarter online medical claims.",
  "../../../assets/img/quick_claim.jpg",
  "https://chrome.google.com/webstore/detail/quick-claim/hlmoiemagjdmhpcjeolbcehhildojkki"
),
  new Project('Markdown Previewer', new Date(2018,3,24),
  "Preview live custom generated markdown syntax. Implements Angular two-way databinding and pipes.",
  "../../../assets/img/markdown_previewer.jpg",
  null,
  "markdown-previewer"
  ),
  new Project('Camper Leaderboard', new Date(2018,3,26),
  "Camper leaderboard project",
  null,
  null,
  "camper-leaderboard"
)

  ];

  getProjects(){
    return this.projects;
  }
}
