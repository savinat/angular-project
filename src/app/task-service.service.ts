import { Injectable } from '@angular/core';

@Injectable()
export class TaskServiceService {
  taskList = [];
  completTask = [];
  constructor() { }
  addTask(task: string) {
    this.taskList.push(task);
    return this.taskList;
  }
  getTask() {
    return this.taskList;
  }
  removeTask(removeIndex : number){
    this.taskList.splice(removeIndex, 1);
  }
  completedTask(removeIndex : number, addTask : string){
    this.completTask.push(addTask);
    console.log(addTask);
    this.taskList.splice(removeIndex, 1);
    return this.completTask;
  }
  clearTaskList(){
    this.taskList = [];
    return this.taskList;
  }

  clearCompleteList(){
    this.completTask = [];
    return this.completTask;
  }

}
