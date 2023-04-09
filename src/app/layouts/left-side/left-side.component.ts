import { Component, OnInit } from '@angular/core';
import { cardsPortfolioArray } from 'src/mockData/cardsPortfolio';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  active = false;
  cardsArray = cardsPortfolioArray;
  constructor() { }

  ngOnInit(): void {
  }

  public activeCard(card:any) {
    this.cardsArray.forEach(el=>{
      if(card.id === el.id){
        card.active = true;
      }else{
        el.active = false;
      }
    })
  }
}
