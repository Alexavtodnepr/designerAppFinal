import { Component, OnInit, ElementRef } from '@angular/core';
import { cardsPortfolioArray } from 'src/mockData/cardsPortfolio';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css'],
  animations: [
    trigger('changeHeight', [
      state('h-30', style({
        height: '120px'
      })),
      state('h-fit', style({
        height: '700px'
      })),
      transition('h-30 <=> h-fit', [
        animate('1s 0s ease-out')
      ])
    ])
  ]
})
export class LeftSideComponent implements OnInit {
  active = false;
  heightChosedBlock: number = 120;
  cardsArray = cardsPortfolioArray;
  constructor() { }

  ngOnInit(): void {
  }

  public activeCard(card:any) {
    const lastEl = this.cardsArray[this.cardsArray.length -1];
    console.log();
    this.cardsArray.forEach(el=>{
      if(el.id === lastEl.id){
        return
      }
      if(card.id === el.id){
        card.active = !card.active;
      }else{
        el.active = false;
      }
    })
  }
}
