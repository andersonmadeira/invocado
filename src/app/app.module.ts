import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddTaskPage } from '../pages/add-task-page/add-task-page';
import { TaskDetailPage } from '../pages/task-detail-page/task-detail-page';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddTaskPage,
    TaskDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddTaskPage,
    TaskDetailPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}
