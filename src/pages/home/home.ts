import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddTaskPage } from '../add-task-page/add-task-page';
import { TaskDetailPage } from '../task-detail-page/task-detail-page';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tasks = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.dataService.getData().then( (tasks) => {
        if (tasks) {
          this.tasks = JSON.parse(tasks);
        }
    });
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
    this.dataService.save(this.tasks);
  }

  viewTask(task) {
    this.navCtrl.push(TaskDetailPage, { task: task });
  }

}
