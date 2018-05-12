import { Component } from '@angular/core';
import * as firebase from 'firebase';
// Firebase env
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig);
  }
}
