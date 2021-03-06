import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';


/*
  Generated class for the Messages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }
  openMessage(){
  	this.navCtrl.push(MessagePage);
  }


}
