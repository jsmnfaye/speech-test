import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  counter: number = 0;
  answers: Array<number> = [];
  answer: any;

  constructor(public navCtrl: NavController, private speechRecog: SpeechRecognition) { }

  ngOnInit(){
    this.speechRecog.hasPermission().then((hasPermission: boolean) => {
      if(!hasPermission){
        this.speechRecog.requestPermission().then(
          () => console.log('Permission granted.'),
          () => console.log('Permission denied.')
        )
      }
    });
  }

  nextQuestion(){
    this.speechRecog.startListening().subscribe(
      (matches: Array<string>) => {
        // this.answer = matches[0];
        this.lookForNumber(matches);
        console.log("your answer is "+this.answer);
        this.counter++;
        this.answers.push(this.answer);
        console.log(this.answers);
        console.log("answer #"+this.counter);
      }
    )
  }

  resetCounter(){
    this.counter = 0;
    console.log('counter is reset!');
  }

  lookForNumber(matches: Array<string>){
    for(let i = 0; i<matches.length; i++){
      if(matches[i] == '1' || matches[i] == '2' || matches[i] == '3' || matches[i] == '4' || matches[i] == '5'){
        this.answer = parseInt(matches[i]);
        break;
      }
    }
    // console.log(this.answer);
  }

}
