import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Messages provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Messages {

  constructor(public alertCtrl: AlertController) {

  }

  alert(t: string, msg: string) {
    let prompt = this.alertCtrl.create({
      title: t,
      message: msg,
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });

    prompt.present();
  }

}
