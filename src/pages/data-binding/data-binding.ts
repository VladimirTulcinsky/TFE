import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DataBindingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-binding',
  templateUrl: 'data-binding.html',
})
export class DataBindingPage {

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
    console.log('ionViewDidLoad DataBindingPage');
  }

}
