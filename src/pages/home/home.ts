import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { AddTaskPage } from '../add-task-page/add-task-page';
import { TaskDetailPage } from '../task-detail-page/task-detail-page';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tasks = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
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

  deleteTask(task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.dataService.save(this.tasks);
  }

  openSheet(task) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Task Options',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            let prompt = this.alertCtrl.create({
              title: 'Delete task',
              message: 'Are you sure you wanna delete task "' + task.title + '" ?',
              buttons: [
                {
                  text: 'Cancel'
                },
                {
                  text: 'Yes',
                  handler: () => {
                    this.deleteTask(task);
                  }
                }
              ]
            });

            prompt.present();
          }
        },
        {
          text: 'Edit',
          role: 'edit',
          icon: 'create',
          handler: () => {
            this.navCtrl.push(TaskDetailPage, { task: task });
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
