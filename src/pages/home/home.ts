import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: any = [];

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {

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

  delTask(task){
    let index = this.tasks.indexOf(task);

    if(index > -1){
      this.tasks.splice(index, 1);
    }
  }

}
