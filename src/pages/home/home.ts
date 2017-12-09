import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  counter: number = 0;
  answers: Array<number> = [];

  constructor(public navCtrl: NavController) { }

  nextQuestion(){
    this.counter++;
    this.answers.push(this.counter);
    console.log(this.answers);
  }

  resetCounter(){
    this.counter = 0;
    console.log('counter is reset!');
  }

}
