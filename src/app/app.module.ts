import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';



import { TaskComponent } from './task/task.component';
import {TaskServiceService} from './task-service.service';
import {LogService} from './log.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

    TaskServiceService,
    LogService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
