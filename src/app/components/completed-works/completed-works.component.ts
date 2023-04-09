import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-completed-works',
  templateUrl: './completed-works.component.html',
  styleUrls: ['./completed-works.component.css']
})
export class CompletedWorksComponent implements OnInit {
  @Input() pictureArray!: any
  constructor() { }

  ngOnInit(): void {
  }

}
