import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
// @ViewChild(Searchbar) searchbar: Searchbar;
	searchQuery : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	// var searchQuery;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
 //  ionViewDidEnter() {
 //      setTimeout(() => {
 //        this.searchbar.setFocus();
 //   });
 // }
  onCancel(){
  	this.navCtrl.pop();
  }
  onSearch(){
  	alert(this.searchQuery);
  }


}
