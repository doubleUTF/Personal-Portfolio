import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IssueTrackerService} from '../issue-tracker.service';

@Component({
  selector: 'it-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../issue-tracker.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('mobileSearch') mobileSearch: ElementRef;
  constructor(
    private itService:IssueTrackerService
  ) { }

  searchInput:FormControl;

  ngOnInit() {
    this.searchInput=new FormControl('');
    this.searchInput.valueChanges.subscribe((value)=>{
      this.itService.searchSubject.next(value)
    })
    this.itService.clearSubject.subscribe(()=>this.searchInput.setValue(''))
  }

  showSearchBar=false;
  closeSearchBar(){
    this.showSearchBar=false;
  }

  openSearchBar(){
    this.showSearchBar=true;
    setTimeout(()=>{
    this.mobileSearch.nativeElement.focus();
  },0)
  }

  activateSearch(){
    if (this.showSearchBar){
      this.closeSearchBar()
    } else this.openSearchBar()
  }

}
