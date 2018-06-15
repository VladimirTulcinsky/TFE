import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DesignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-design',
  templateUrl: 'design.html',
})
export class DesignPage {

  code: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.code = `const BeerRow = ({ beer }) =>
    (
        &ltView style={styles.row}&gt
          &ltImage source={{ uri: "https://beeranking.herokuapp.com/" + beer.path }} style={styles.picture} /&gt
            &ltText style={styles.primaryText}&gt{beer.name}&lt/Text&gt
        &lt/View&gt
    );
    
    const styles = StyleSheet.create({
      row: { flexDirection: "row", alignItems: "center", padding: 12 },
      picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
      primaryText: {
          fontWeight: "bold",
          fontSize: 14,
          color: "black",
          marginBottom: 4
      }
  });
    `;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesignPage');
  }

}
