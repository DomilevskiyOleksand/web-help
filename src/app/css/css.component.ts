import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.sass']
})

export class CssComponent implements OnInit {
  tabs: TabsComponent;
  cssCollapsed : boolean = false;
  csslist=[
  "Lorem ipsum dolor sit amet",  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
  ];
  constructor(tabs: TabsComponent) { 
    this.tabs = tabs;
  }
  rount : number;
  cssListful=[1,2,3,4,5,6,7,8,9,10,
  11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,
  31,32,33,34,35,36,37,38,19,40];
  tagsdetal=["I am good boy)"];

  toggleCollapse(i){
    this.cssCollapsed = !this.cssCollapsed;
    console.log(this.cssListful[i]);
    this.rount=this.cssListful[i];
    console.log(this.cssCollapsed);


  }

toggleCollapsed(){
  this.cssCollapsed = !this.cssCollapsed;
}

  ngOnInit() {
  }
  continue() {
    this.tabs.arrangeTabs(1);
  }
}
