import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  datafromprevious_page:any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public http:HttpClient) {
    this.datafromprevious_page = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    // console.log(this.datafromprevious_page);
    this.httpFunction();
  }
  
  datafromhttp:any;

  httpFunction(){
    this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1&userId=5").subscribe(response => {
      console.log(response);
      this.datafromhttp = response;
    },err => {
      console.log(err);
    })

     //Method Post
    let item = {
      fname : "somename",
      lname : "somelastname"
    };
    this.http.post("http://jsonplaceholder.typicode.com/posts",item).subscribe(response => {
      console.log(response);
    },err => {
      console.log(err);
    })

  }
}
