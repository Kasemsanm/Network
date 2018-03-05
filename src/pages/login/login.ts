import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  account:{
    email:string,
    password:string
  } = {
    email: "test@email.com",
    password: "12345678"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alertBox(){
    this.alertCtrl.create({
      subTitle: this.account.email,
      buttons:['OK']
    }).present();
  }

  loginClick(){
    console.log('Click success');
    console.log('email',this.account.email);
    console.log('password',this.account.password);
    this.alertBox();
    let item = this.account;
    this.navCtrl.push(MainPage,item);
  }

}
