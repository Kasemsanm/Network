import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the StoragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
    this.loadStorageValue();
    this.loadStorageValue_Async();
  }

  storeVar:any

  storeDataClick(){
    this.storage.set('save',this.storeVar);
  }

  loadStorageValue(){
    this.storage.get('save').then(val => {
      console.log(val);
    })
  }

  async loadStorageValue_Async(){
    let temp: any;
    temp = await this.storage.get('save').then(val => {
      return val;
    })
  }

}
