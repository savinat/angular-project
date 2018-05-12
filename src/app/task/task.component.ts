import {Component, Injectable, OnInit} from '@angular/core';
import {TaskServiceService} from '../task-service.service';
import {LogService} from '../log.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
@Injectable()
export class TaskComponent implements OnInit {

  constructor(private taskService: TaskServiceService, private logService: LogService) { }
  taskList = [];
  completTask = [];
  addTaskToList(task: string) {
    this.taskList = this.taskService.addTask(task);
    this.logService.writeLog('Data Added to the list');
    return this.taskList;
  }

  removeTaskFromList(removeIndex : number){
    this.taskService.removeTask(removeIndex);
  }
  addCompletedTaskToList(removeIndex : number, addTask : string){
    this.completTask = this.taskService.completedTask(removeIndex, addTask);
    return this.completTask;
  }

  clearList(taskList: string[], completTask: string[]){
    taskList = this.taskService.clearTaskList();
    this.taskList = [];
    completTask = this.taskService.clearCompleteList();
    this.completTask = [];
  }
  ngOnInit() {
  }

}
