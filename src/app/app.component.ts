import { Component } from '@angular/core';

import { FcmPushService } from './services/fcm-push/fcm-push.service';
import { FirebaseAuthService } from './services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user;
  message;
  constructor(private _fcmPushService: FcmPushService, private _auth: FirebaseAuthService) { }

  loginWithGoogle() {
    this._auth.googleLogin().then(() => {
      this.user = this._auth.currentUser;

      this._fcmPushService.getPermission();
      this._fcmPushService.receiveMessage();
      this._fcmPushService.currentMessage.subscribe(message => this.message = message);
    });
  }

  logout() {
    this._auth.signOut().then(() => {
      this.user = null;
    });
  }

}
