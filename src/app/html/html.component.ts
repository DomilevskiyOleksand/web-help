import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
@Component({
  selector: 'html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.sass']
})
export class HtmlComponent implements OnInit {
  tabs: TabsComponent
  constructor(tabs: TabsComponent) {
    this.tabs = tabs;
   }
   htCollapsed : boolean = false;
   htlist=[
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
   "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
   ];
   rount : number;
   htListful=[1,2,3,4,5,6,7,8,9,10,
   11,12,13,14,15,16,17,18,19,20,
   21,22,23,24,25,26,27,28,29,30,
   31,32,33,34,35,36,37,38,19,40];
   tagsdetal=["I am good boy)"];
 
   toggleCollapse(i){
     this.htCollapsed = !this.htCollapsed;
     console.log(this.htListful[i]);
     this.rount=this.htListful[i];
     console.log(this.htCollapsed);
 
 
   }
 
 toggleCollapsed(){
   this.htCollapsed = !this.htCollapsed;
 }

  ngOnInit() {
  }

  continue() {
    this.tabs.arrangeTabs(2);
  }

}