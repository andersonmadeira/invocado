import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the TaskDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-task-detail-page',
  templateUrl: 'task-detail-page.html'
})
export class TaskDetailPage {

  title;
  description;

  constructor(public navParams: NavParams) {}

  ionViewDidLoad() {
    this.title = this.navParams.get('task').title;
    this.description = this.navParams.get('task').description;
  }

}
