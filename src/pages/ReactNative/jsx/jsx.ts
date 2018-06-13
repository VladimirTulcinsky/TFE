import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JsxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jsx',
  templateUrl: 'jsx.html',
})
export class JsxPage {

  code: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.code = `class Square extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
    
      render() {
        return (
          <button className="square" onClick={() => this.setState({value: 'X'})}>
            {this.state.value}
          </button>
        );
      }
    }`;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsxPage');
  }

}
