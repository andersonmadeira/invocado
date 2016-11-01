import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddTaskPage } from '../add-task-page/add-task-page';
import { TaskDetailPage } from '../task-detail-page/task-detail-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tasks = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    // foo
  }

  addTask() {
    let addModal = this.modalCtrl.create(AddTaskPage);

    addModal.onDidDismiss( (task) => {
      if (task) {
        this.saveTask(task);
      }
    });

    addModal.present();
  }

  saveTask(task) {
    this.tasks.push(task);
  }

  viewTask(task) {
    this.navCtrl.push(TaskDetailPage, { task: task });
  }

}
