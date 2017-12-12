import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDHyCNBP2KH-wM8VxhHEZKE_RX1wGJwQ8E",
      authDomain: "ng-recipe-book-57150.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
