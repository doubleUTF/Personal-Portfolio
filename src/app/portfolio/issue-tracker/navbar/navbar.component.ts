import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'it-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('mobileSearch') mobileSearch: ElementRef;
  constructor() { }

  searchInput:FormControl;

  ngOnInit() {
    this.searchInput=new FormControl('');
    this.searchInput.valueChanges.subscribe((value)=>{
      console.log(value)
    })
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
