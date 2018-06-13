import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FonctionnalitesNativesRnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fonctionnalites-natives-rn',
  templateUrl: 'fonctionnalites-natives-rn.html',
})
export class FonctionnalitesNativesRnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FonctionnalitesNativesRnPage');
  }

}
