import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-fonctionnalites-natives',
  templateUrl: 'fonctionnalites-natives.html',
})
export class FonctionnalitesNativesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FonctionnalitesNativesPage');
  }

  goToSite(){
    const site = this.iab.create('https://ionicframework.com/docs/native/in-app-browser/');
  }
  

}
