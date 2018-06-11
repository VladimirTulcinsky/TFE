import { page } from './../../../providers/utility/utility';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IonicHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ionic-home',
  templateUrl: 'ionic-home.html',
})
export class IonicHomePage {
  pages: page[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages[0] = {
      title: "Maturité",
      namePage: "MaturitePage"
    };

    this.pages[1] = {
      title: "Architecture",
      namePage: "ArchitecturePage"
    };

    this.pages[2] = {
      title: "TypeScript",
      namePage: "TypeScriptPage"
    };

    this.pages[3] = {
      title: "Design",
      namePage: "DesignPage"
    };

    this.pages[4] = {
      title: "Fonctionnalités natives",
      namePage: "FonctionnalitesNativesPage"
    };


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IonicHomePage');
  }

  goTo(page) {
    this.navCtrl.push(page);
  }

}
