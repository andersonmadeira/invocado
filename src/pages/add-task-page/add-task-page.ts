import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the AddTaskPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-task-page',
  templateUrl: 'add-task-page.html'
})
export class AddTaskPage {

  title;
  description;

  constructor(public navCtrl: NavController, public view: ViewController) {
    
  }

  saveTask() {
    let newTask = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newTask);
  }

  close() {
    this.view.dismiss();
  }

}
