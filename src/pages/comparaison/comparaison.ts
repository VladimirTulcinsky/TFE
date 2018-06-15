import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-comparaison',
  templateUrl: 'comparaison.html',
})
export class ComparaisonPage {
  pages: any = [];

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
      title: "Langages",
      namePage: "LangagesPage"
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

    // this.pages[7] = {
    //   title: "Live reload sans lazy loading",
    //   namePage: LiveReloadNllPage
    // };
  }

  goTo(page) {
    this.navCtrl.push(page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComparaisonPage');
  }

}
