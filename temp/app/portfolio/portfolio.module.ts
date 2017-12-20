import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StageComponent } from './stage/stage.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PortfolioComponent, NavbarComponent, StageComponent,
    CardsComponent, CardComponent, FooterComponent,],
  exports:[
    PortfolioComponent
  ]
})
export class PortfolioModule { }
