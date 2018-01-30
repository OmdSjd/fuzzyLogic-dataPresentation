import { Component, OnInit } from '@angular/core';
import {FuzzyLogicService} from './services/fuzzy-logic-service.service';
import {MemberShipFunction} from './models/membershipFunction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private memberShipFunctions: MemberShipFunction[];

  constructor(private service: FuzzyLogicService) {
  }

  ngOnInit(): void{
    this.memberShipFunctions = this.service.getMemberFunctions();
    this.showMemberFunctions();
  }
  public showMemberFunctions() {
    for ( var i = 0; i < this.memberShipFunctions.length; i++) {
        console.log(this.memberShipFunctions[i].upperTop1);
    }
  }
}
