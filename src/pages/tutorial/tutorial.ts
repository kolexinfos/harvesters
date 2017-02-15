import { Component } from '@angular/core';

import { MenuController, NavController, Platform, LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';




interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  player:any;

  constructor(public loadingCtrl: LoadingController,
  public platform: Platform, public navCtrl: NavController, 
  public menu: MenuController) {
    

    this.slides = [
      {
        title: 'Welcome to <b>Harvesters</b>',
        description: '....changing lives and raising pacesetters',
        image: 'img/234radio.jpg',
      },
      {
        title: 'Find <b>234Radio</b> on all social media platforms',
        description: 'Follow us on Twitter: @my234radio and search for 234Radio on Facebook',
        image: 'img/234radio.jpg',
      },
      {
        title: 'Be our reporter',
        description: 'Submit iWitness report and get heard.',
        image: 'img/234radio.jpg'
      }
    ];

    this.platform.ready().then(() => {
    console.log("ionViewWillEnter called");
    
    });
  }

  startPlaying() {
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading please wait...'
    });

    loadingPopup.present();
  }
  startApp() {

    this.navCtrl.setRoot(HomePage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);

  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }


}
