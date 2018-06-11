import { UtilityProvider, applicationType } from './../../../providers/utility/utility';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailViewPage } from '../detail-view/detail-view';


@IonicPage()
@Component({
  selector: 'page-types-applications',
  templateUrl: 'types-applications.html',
})
export class TypesApplicationsPage {

  types: applicationType[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private utilityProvider:UtilityProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypesApplicationsPage');
    this.types[0] = {
      type: "NATIVES",
      langages: ["ANDROID : JAVA & KOTLIN", "IOS : OBJECTIVE-C & SWIFT"],
      caracteristiques: ["UNIQUE À LA PLATEFORME", "PERFORMANCES OPTIMALES", "FONCTIONNALITÉS NATIVES", "STORES OFFICIELS"]
    };

    this.types[1] = {
      type: "WEB APP & PROGRESSIVE WEB APPS",
      langages: ["HTML", "CSS", "JS", "Pour résumer, les langages WEB"],
      caracteristiques: ["INDÉPENDANT DE LA PLATEFORME", "PERFORMANCES LAISSENT À DÉSIRER", "PAS DE FONCTIONNALITÉS NATIVES", "PAS SUR LES STORES OFFICIELS"]
    };

    this.types[2] = {
      type: "HYBRIDES",
      langages: ["HTML", "CSS", "JS", "Pour résumer, les langages WEB"],
      caracteristiques: ["CROSS-PLATFORM", "CORRECTES MAIS LIMITÉES À CAUSE DE LA WEBVIEW", "FONCTIONNALITÉS NATIVES", "STORES OFFICIELS"]
    };
  }

  goToDetailView(type: applicationType) {
    this.utilityProvider.setCurrentType(type);
    this.navCtrl.push("DetailViewPage");
  }

}


