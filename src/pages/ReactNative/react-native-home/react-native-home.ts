import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-react-native-home',
  templateUrl: 'react-native-home.html',
})
export class ReactNativeHomePage {
  pages = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages[0] = {
      title: "Maturité",
      namePage: "MaturiteRnPage"
    };

    this.pages[1] = {
      title: "Architecture",
      namePage: "ArchitectureRnPage"
    };

    this.pages[2] = {
      title: "JSX",
      namePage: "JsxPage"
    };

    this.pages[3] = {
      title: "Flow",
      namePage: "FlowPage"
    };

    this.pages[4] = {
      title: "Design",
      namePage: "DesignRnPage"
    };

    this.pages[5] = {
      title: "Fonctionnalités natives",
      namePage: "FonctionnalitesNativesRnPage"
    };

    this.pages[6] = {
      title: "Data binding",
      namePage: "DataBindingRnPage"
    };

    this.pages[7] = {
      title: "Live reload sans lazy loading",
      namePage: ""
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReactNativeHomePage');
  }

  goTo(page) {
    this.navCtrl.push(page);
  }

}
