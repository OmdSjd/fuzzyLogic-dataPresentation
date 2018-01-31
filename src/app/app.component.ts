import { Component, OnInit } from '@angular/core';
import {FuzzyLogicService} from './services/fuzzy-logic-service.service';
import {MemberShipFunction} from './models/membershipFunction.model';
import {Member} from './models/member.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private memberShipFunctions: MemberShipFunction[];
  private members: Member[] = [];
  private graphStart = 0;
  private graphEnd = 0;
  private showThis = false;
  private memberToShow: Member = new Member;

  constructor(private service: FuzzyLogicService) {
    this.memberShipFunctions = this.service.getMemberFunctions();
  }

  ngOnInit(): void {
    this.graphStart = this.setGraphAxis().min;
    this.graphEnd = this.setGraphAxis().max;
    this.setMembers();
  }
  public setGraphAxis() {
    const minArr: number[] = [];
    const maxArr: number[] = [];
    this.memberShipFunctions.forEach(function (member) {
      minArr.push(member.upperStart);
      maxArr.push(member.upperEnd);
    });
    return {'min' : Math.min.apply(null, minArr), 'max' : Math.max.apply(null, maxArr)};
  }
  public showThisMember(m: Member) {
    this.showThis = true;
    this.memberToShow = m;
  }
  private setMembers() {
    for ( let i = 0; i < this.memberShipFunctions.length; i++ ) {
      let m: Member = new Member()
      m = this.calculateSurface(this.memberShipFunctions[i]);
      this.members.push(m);
    }
    this.members.forEach(function (m) {
      console.log(m);
    });
  }
  /* Todo: Check why data visualisation of the HIGH block is not 100% accurate */
  private calculateSurface(membershipFunction: MemberShipFunction): Member {
    const m: Member = new Member();
    if (membershipFunction) {
      m.membershipFunction = membershipFunction;
      m.surface   = ((membershipFunction.upperEnd - membershipFunction.upperStart) / (this.graphEnd - this.graphStart)) * 100;
      m.core      = ((membershipFunction.upperTop2 - membershipFunction.upperTop1) / (membershipFunction.upperEnd - membershipFunction.upperStart)) * 100;
      m.fuzzy     = 100 - m.core;
      m.start     = membershipFunction.upperStart === this.graphStart ?  0 : (((membershipFunction.upperStart - this.graphStart) / (this.graphEnd - this.graphStart))) * 100;
      m.startCore = membershipFunction.upperTop1 === membershipFunction.upperStart ?  0 : membershipFunction.upperTop2 === membershipFunction.upperEnd ? m.fuzzy : ((membershipFunction.upperTop1 / (this.graphEnd - this.graphStart))) * 100;
      return m;
    }
    return null;
  }

}
