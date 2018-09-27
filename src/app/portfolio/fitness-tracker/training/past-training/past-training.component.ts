import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {Exercise} from '../exercise.model';
import {TrainingService} from '../training.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'fitness-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns=['date','name','duration','calories','state'];
  dataSource=new MatTableDataSource<Exercise>()

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(
    private ts:TrainingService
  ) { }

  ngOnInit() {
    this.dataSource.data=this.ts.getCompletedOrCancelledExercises()
  }

  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  doFilter(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}
