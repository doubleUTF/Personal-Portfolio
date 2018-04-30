import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-camper-leaderboard',
  templateUrl: './camper-leaderboard.component.html',
  styleUrls: ['./camper-leaderboard.component.css'],
  providers:[HttpClient]
})
export class CamperLeaderboardComponent implements OnInit {

  constructor(private http:HttpClient) {}

  currentList:object[];
  currentType:string;
  ngOnInit() {
    this.getData('Recent');
  }

  readonly topRecentURL='https://fcctop100.herokuapp.com/api/fccusers/top/recent'
  readonly topAllTimeURL='https://fcctop100.herokuapp.com/api/fccusers/top/alltime'

  getData(type:string){
    if (type == this.currentType) return
    else if (type=='Recent'){
      this.http.get(this.topRecentURL).subscribe(
        (response:object[])=>{
          this.currentList=response;
        }
      );
    } else if (type=='AllTime'){
      this.http.get(this.topAllTimeURL).subscribe(
        (response:object[])=>{
          this.currentList=response;
        }
      )
    }
    this.currentType=type
  }
}
