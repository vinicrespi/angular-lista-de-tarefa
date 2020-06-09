import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {id: 1, description: 'Tarefa 1', completed: false},
    {id: 2, description: 'Tarefa 2', completed: true},
    {id: 3, description: 'Tarefa 3', completed: false},

  ];

  constructor() { }

  getAll(){
    return this.tasks;
  }

  getById(id: number){
    // tslint:disable-next-line: triple-equals
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  save(task: Task){
    if (task.id){
      const taskArr = this.getById(task.id);
      taskArr.description = task.description;
      taskArr.completed = task.completed;
    } else{
      let lastId = 0;
      if (this.tasks.length > 0) {
        lastId = this.tasks[this.tasks.length - 1].id;
      }

      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);
    }
  }

  delete(id: number){
    // tslint:disable-next-line: triple-equals
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);
  }
}
