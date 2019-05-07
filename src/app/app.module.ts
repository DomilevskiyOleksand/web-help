import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
//import { SliderComponent } from './slider/slider.component';
import { MyNewComponent } from './my-new/my-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologiesComponent,
    CssComponent,
    HtmlComponent,
    JavaScriptComponent,
    TabComponent,
    TabsComponent,
    //SliderComponent,
    MyNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
