import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.sass']
})
export class TechnologiesComponent implements OnInit {
  hideEl : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  previous() {

  }

  next() {
    
  }

  hide(hideElement: any) {
    this.hideEl = hideElement;
  }

    delClosable(delHide : any) {
      this.hideEl = delHide;
    }
}
