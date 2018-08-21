import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor() {
  var config = {
    apiKey: "AIzaSyCiFFfGJq_an9md0QY1Di1mKetKrvqsThk",
    authDomain: "bookshelves-744a8.firebaseapp.com",
    databaseURL: "https://bookshelves-744a8.firebaseio.com",
    projectId: "bookshelves-744a8",
    storageBucket: "bookshelves-744a8.appspot.com",
    messagingSenderId: "143477872228"
  };
  firebase.initializeApp(config);
 }
}
