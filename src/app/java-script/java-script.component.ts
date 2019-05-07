import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.sass']
})
export class JavaScriptComponent implements OnInit {
  isCollapsed : boolean = false;
  tagslist=["Lorem", 
  "Lorem","Lorem","Lorem","Lorem",
  "Lorem","Lorem","Lorem","Lorem",
  "Lorem","Lorem","Lorem","Lorem",
  "Lorem","Lorem","Lorem","Lorem",
  "Lorem","Lorem","Lorem","Lorem",
  "Lorem","Lorem","Lorem","Lorem",
  "Lorem","Lorem","Lorem","Lorem",
  "Lorem","Lorem","Lorem","Lorem",
  "123"
  ];
  fount : number;
  tagListful=[1,2,3,4,5,6,7,8,9,10,
  11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,
  31,32,33,34,35,36,37,38,19,40];
  tagsdetal=["I am good boy)"];
  constructor() { }
  toggleCollapse(i){
    this.isCollapsed = !this.isCollapsed;
    console.log(this.tagListful[i]);
    this.fount=this.tagListful[i];

  }

toggleCollapsed(){
  this.isCollapsed = !this.isCollapsed;
}
  ngOnInit() {
  }

}
