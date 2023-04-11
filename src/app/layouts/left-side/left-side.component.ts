import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
  lastEl= {id: 8, height: 'fit-content', type: 'picture', title: 'MY ART',
    picture: [
      {type: 'carousel', imgUrl: 'assets/myArt/1.png', alt: ''},
      {type: 'carousel', imgUrl: 'assets/myArt/2.png', alt: ''},
      {type: 'carousel', imgUrl: 'assets/myArt/3.png', alt: ''},
      {type: 'carousel', imgUrl: 'assets/myArt/4.png', alt: ''},
      {type: 'carousel', imgUrl: 'assets/myArt/5.png', alt: ''},
      {type: 'carousel', imgUrl: 'assets/myArt/6.png', alt: ''},
      {type: 'carousel', imgUrl: 'assets/myArt/7.png', alt: ''},
      {type: 'carousel', imgUrl: 'assets/myArt/8.png', alt: ''},
      {type: 'carousel', imgUrl: 'assets/myArt/9.png', alt: ''},
    ],
    active: true};
  constructor() { }

  ngOnInit(): void {
  }

  public activeCard(card:any) {
    const lastEl = this.cardsArray[this.cardsArray.length -1];
    console.log();
    this.cardsArray.forEach(el=>{
      // if(el.id === lastEl.id){
      //   return
      // }
      if(card.id === el.id){
        card.active = !card.active;
      }else{
        el.active = false;
      }
    })
  }
}
