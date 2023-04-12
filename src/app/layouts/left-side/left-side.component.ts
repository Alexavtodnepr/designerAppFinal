import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { cardsPortfolioArray, lastCardCarousel } from 'src/mockData/cardsPortfolio';
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
export class LeftSideComponent implements OnInit, OnChanges {
  active = false;
  heightChosedBlock: number = 120;
  cardsArray = cardsPortfolioArray;
  lastEl = lastCardCarousel;
  @Input() resumeOpened!:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public activeCard(card:any) {
    if(this.resumeOpened){
      return
    }
    this.cardsArray.forEach(el=>{
      if(card.id === el.id){
        card.active = !card.active;
      }else{
        el.active = false;
      }
    })
  }

  public ngOnChanges(changes: SimpleChanges) {
    if(this.resumeOpened){
      this.cardsArray.forEach(el=>{
        if(el.active){
          el.active = false;
        }
      })
    }
  }
}
