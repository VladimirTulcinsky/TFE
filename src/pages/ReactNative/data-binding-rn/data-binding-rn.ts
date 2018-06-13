import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DataBindingRnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-binding-rn',
  templateUrl: 'data-binding-rn.html',
})
export class DataBindingRnPage {

  code: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.code = `
    render() { 
      return &ltinput value={this.state.value} onChange={this.changeValue} /&gt 
    }
   
    changeValue(e) {
      this.setState({value: e.target.value}); 
    }`;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataBindingRnPage');
  }

}
