import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FuzzyLogicService} from './services/fuzzy-logic-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FuzzyLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
