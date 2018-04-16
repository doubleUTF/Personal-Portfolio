import { Component, OnInit } from '@angular/core';
import { Project } from './project/project.model';
import {PortfolioService} from './portfolio.service';
import {MOST_RECENT,EARLIEST,A_to_Z,Z_to_A} from './sort-options.model';

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
    this.getPortfolioData(this.sortOption);
  }

  sortOption:string;
  projects:Project[]
  sortData:object;
  sortOptions:string[]=[
    MOST_RECENT,
    EARLIEST,
    // A_to_Z,
    // Z_to_A
  ]

  getPortfolioData(sortOption:string){
    this.sortOption=sortOption;
    this.sortData=this.portfolioService.getSortedData(this.projects,sortOption)
  }

  headers:string[];
}
