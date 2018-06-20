import { Component, OnInit, TemplateRef } from '@angular/core';
import {RecipeBoxService} from '../recipe-box.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-recipe-nav',
  templateUrl: './recipe-nav.component.html',
  styleUrls: ['./recipe-nav.component.css']
})
export class RecipeNavComponent implements OnInit {
  modalRef:BsModalRef;
  constructor(
    private recipeService:RecipeBoxService,
    private modalService:BsModalService
  ) { }

  ngOnInit() {
  }

  openModal(template:TemplateRef<any>){
    this.modalRef=this.modalService.show(template);
  }

  resetRecipes(){
    this.modalRef.hide();
    this.recipeService.resetRecipes();
  }
}
