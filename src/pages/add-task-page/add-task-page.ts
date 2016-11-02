import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Messages } from '../../providers/messages';

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

  constructor(public navCtrl: NavController, public view: ViewController, public msg: Messages) {

  }

  saveTask() {

    if ( this.validFields() ) {
      let newTask = {
        title: this.title,
        description: this.description
      };

      this.view.dismiss(newTask);
    }

  }

  validFields() {
    if ( ! this.title ) {
      this.msg.alert('Título', 'Dá um título a tua tarefa');
      return false;
    } else if ( !this.description ) {
      this.msg.alert('Descrição', 'Favor descrever a tarefa');
      return false;
    }

    return true;
  }

  close() {
    this.view.dismiss();
  }

}
