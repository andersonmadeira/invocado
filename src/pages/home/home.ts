import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { NativeStorage, Dialogs } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tasks;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    this.tasks = [
      { title: 'task1', description: 'test1' },
      { title: 'task2', description: 'test2' },
      { title: 'task3', description: 'test3' }
    ];
  }

  addTask() {
    let prompt = this.alertCtrl.create({
      title: 'Adicionar tarefa',
      inputs: [{
          name: 'title'
      }],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Adicionar',
          handler: data => {
            if (data.title) {
              this.tasks.push(data);

              NativeStorage.setItem('last_task', data)
              .then(
                () => console.log('Stored item: ' + JSON.stringify(data) ),
                error => console.error('Error storing item', error)
              );
            }
          }
        }
      ]
    });

    prompt.present();
  }

  editTask(task) {
    let prompt = this.alertCtrl.create({
      title: 'Editar Tarefa',
      inputs: [{
        name: 'title',
        placeholder: task.title
      }],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Salvar',
          handler: data => {
            if (data.title) {
              let index = this.tasks.indexOf(task);

              if(index > -1) {
                this.tasks[index] = data;
              }
            }
          }
        }
      ]
    });

    prompt.present();
  }

  delTask(task) {
    let index = this.tasks.indexOf(task);

    if(index > -1) {
      let obj = this.tasks[index];
      let prompt = this.alertCtrl.create({
        title: 'Excluir tarefa',
        message: 'Tem certeza que deseja excluir a tarefa "' + obj.title + '" ?',
        buttons: [
          {
            text: 'Cancelar'
          },
          {
            text: 'Sim',
            handler: () => {
              this.tasks.splice(index, 1);
            }
          }
        ]
      });

      prompt.present();
    }
  }

}
