import { applicationType, UtilityProvider } from './../../../providers/utility/utility';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-view',
  templateUrl: 'detail-view.html',
})
export class DetailViewPage {

  type: applicationType;

  constructor(public navCtrl: NavController, public navParams: NavParams, private utilityProvider: UtilityProvider) {
    this.type = this.utilityProvider.getCurrentType();
    console.log(this.type, "mon type");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailViewPage');
  }

}
