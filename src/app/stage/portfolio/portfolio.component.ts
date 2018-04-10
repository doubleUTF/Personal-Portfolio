import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import {PortfolioService} from './portfolio.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers:[PortfolioService]
})
export class PortfolioComponent implements OnInit {

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit() {
    this.projects=this.portfolioService.getProjects();
    this.sortOption=this.sortOptions[0];
  }

  projects:Project[]

  sortOptions:string[]=[
    'Date- Latest',
    'Date- Earliest',
    'A-Z',
    'Z-A'
  ]

  sortOption:string;
}
