import { TypesApplicationsPage } from './../TypesApplications/types-applications/types-applications';
// import { LiveReloadPage } from './../live-reload/live-reload';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToTypesApplications(){
    this.navCtrl.push("TypesApplicationsPage");
  }

  goToIonic(){
    this.navCtrl.push("IonicHomePage");
  }

}
