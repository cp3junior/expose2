import { Component,ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { WhishlistPage } from '../whishlist/whishlist';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slider: Slides;

  constructor(public navCtrl: NavController) {

  }

  openSearch(){

  	this.navCtrl.push(SearchPage);
  }
  openWhishList(){
  	// this.navCtrl.parent.select(2);
  	this.navCtrl.push(WhishlistPage);
  }

  slideClick(){
	let theClickedIndex = this.slider.clickedIndex;
	alert('clicked on slide '+theClickedIndex);
	}

}
