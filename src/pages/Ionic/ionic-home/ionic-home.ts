import { page } from './../../../providers/utility/utility';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LiveReloadNllPage } from '../live-reload-nll/live-reload-nll';


@IonicPage()
@Component({
  selector: 'page-ionic-home',
  templateUrl: 'ionic-home.html',
})
export class IonicHomePage {
  pages = [];

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

    this.pages[5] = {
      title: "Data binding",
      namePage: "DataBindingPage"
    };

    this.pages[6] = {
      title: "Live reload avec lazy loading",
      namePage: "LiveReloadPage"
    };

    this.pages[7] = {
      title: "Live reload sans lazy loading",
      namePage: LiveReloadNllPage
    };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IonicHomePage');
  }

  goTo(page) {
    this.navCtrl.push(page);
  }

}
