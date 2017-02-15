import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {InAppBrowser, SocialSharing, Device} from 'ionic-native';




declare var window;
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'home.html'
})
export class HomePage {

mySlideOptions = {
    initialSlide: 1,
    loop: true,
    autoplay: 5000,
    pager:true
  };

  playState: string
  //audioStream = new Audio("http://streaming.radio.co/s7f3695a64/listen");

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    //this.player = player;
   
    this.playState = "pause";
    
    console.log("Constructor called");
  }

}
