import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
