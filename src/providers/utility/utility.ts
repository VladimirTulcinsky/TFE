import { applicationType } from './utility';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UtilityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilityProvider {

  currentType: applicationType;

  constructor(public http: HttpClient) {
    console.log('Hello UtilityProvider Provider');
  }

  setCurrentType(type){
    this.currentType = type;
  }

  getCurrentType(){
    return this.currentType;
  }

}

export interface applicationType {
  type: string,
  langages: string[],
  caracteristiques: string[]
}