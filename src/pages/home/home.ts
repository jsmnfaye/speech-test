import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  counter: number = 0;

  constructor(public navCtrl: NavController) { }

  nextQuestion(){
    this.counter++;
    console.log(this.counter);
  }

  resetCounter(){
    this.counter = 0;
    console.log('counter is reset!');
  }

}
