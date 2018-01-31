import { Injectable } from '@angular/core';
import {MemberShipFunction} from '../models/membershipFunction.model';

@Injectable()
export class FuzzyLogicService {
  public memberFunctions: MemberShipFunction[] = [{
    'name': 'Low',
    'upperStart': 4000.0,
    'upperTop1': 4000.0,
    'upperTop2': 33600.0,
    'upperEnd': 54000.0
  }, {
    'name': 'Medium',
    'upperStart': 33600.0,
    'upperTop1': 54000.0,
    'upperTop2': 65000.0,
    'upperEnd': 100997.14285714287
  }, {
    'name': 'High',
    'upperStart': 65000.0,
    'upperTop1': 100997.14285714287,
    'upperTop2': 200000.0,
    'upperEnd': 200000.0
  }];

  constructor() { }

  public getMemberFunctions() {
    return this.memberFunctions;
  }
}
