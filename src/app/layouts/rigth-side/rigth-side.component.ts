import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-rigth-side',
  templateUrl: './rigth-side.component.html',
  styleUrls: ['./rigth-side.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, width: '0' }),
        animate('1s 0s ease-out', style({ opacity: 1, width: '400px' }))
      ]),
      transition(':leave', [
        animate('1s 0s ease-out', style({ opacity: 0, width: '0' }))
      ])
    ])
  ]
})
export class RigthSideComponent implements OnInit {
  showResume: boolean = false;
  @Output() resumeState = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public print() {
    window.print();
  }

  public showCloseResume() {
    if(this.showResume){
      this.resumeState.emit(false);
    }
    if(!this.showResume){
      window.scrollTo({
        top: document.getElementById('resume')?.offsetTop,
        left: document.getElementById('resume')?.offsetLeft,
        behavior: 'smooth'
      });
      this.resumeState.emit(true);
    }
    this.showResume = !this.showResume;
  }
}
