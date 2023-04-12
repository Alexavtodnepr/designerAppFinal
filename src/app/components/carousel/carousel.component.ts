import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewChecked {
  @ViewChild('image') image!: ElementRef;
  @Input() imges!: any;
  timerStarted = false;
  sizeArray = [161.66250610351562, 242, 365.51251220703125, 242, 242, 334.38751220703125, 365.51251220703125, 180.75];
  move= 0;
  index = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public ngAfterViewChecked() {
    const widthAllImg: any[] = [];
    if(!this.timerStarted){
      this.timerStarted = true;
      setTimeout(() => {
        if (this.image){
          for(let i = 0; i<this.image.nativeElement.children.length-1;i++){
            if(this.image.nativeElement.children[i].getBoundingClientRect().width !== 0){
              widthAllImg.push(this.image.nativeElement.children[i].getBoundingClientRect().width);
            }
          }
      // @ts-ignore
          this.sizeArray = widthAllImg;
        }
        // this.interval()
      },5000);
    }

  }

  public prev() {
    if(this.index == 0){
      return
    }
    this.index--;
    if(this.sizeArray.length !== 0){
      this.move += Math.floor(this.sizeArray[this.index]);
    }
  }

  public next() {
    if(this.index == this.sizeArray.length-2){
      this.index = 0;
      this.move = 0;
      return
    }
    this.index++
    if(this.sizeArray.length !== 0){
      this.move += -Math.floor(this.sizeArray[this.index-1]);
    }
  }

  // interval(){
  //   setInterval(()=>{
  //     this.next();
  //   },1000)
  // }
}
