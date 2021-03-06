import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  display_data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.display_data = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

}
