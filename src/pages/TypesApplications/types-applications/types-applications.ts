import { UtilityProvider, applicationType } from './../../../providers/utility/utility';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-types-applications',
  templateUrl: 'types-applications.html',
})
export class TypesApplicationsPage {

  types: applicationType[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private utilityProvider: UtilityProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypesApplicationsPage');
    this.types[0] = {
      type: "Natives",
      langages: [{ langage: "Java & Kotlin", icon: "logo-android" }, { langage: "Objective-C & Swift", icon: "logo-apple" }],
      caracteristiques: ["Unique à la plateforme", "Performances optimales", "Fonctionnalités natives", "Stores officiels"]
    };

    this.types[1] = {
      type: "Web apps & Progressive Web apps",
      langages: [{ langage: "HTML", icon: "logo-html5" }, { langage: "CSS", icon: "logo-css3" }, { langage: "JS", icon: "logo-javascript" }, { langage: "Pour résumer, les langages WEB", icon: "" }],
      caracteristiques: ["Indépendant de la plateforme", "Performances laissent à désirer", "Pas de fonctionnalités natives", "Pas sur les stores officiels"]
    };

    this.types[2] = {
      type: "Hybrides",
      langages: [{ langage: "HTML", icon: "logo-html5" }, { langage: "CSS", icon: "logo-css3" }, { langage: "JS", icon: "logo-javascript" }, { langage: "Pour résumer, les langages WEB", icon: "" }],
      caracteristiques: ["Cross-platform", "Correctes mais limitées à cause de la Webview", "Fonctionnalités natives", "Stores officiels"]
    };
  }

  goToDetailView(type: applicationType) {
    this.utilityProvider.setCurrentType(type);
    this.navCtrl.push("DetailViewPage");
  }

}


