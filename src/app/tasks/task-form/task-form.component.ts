import { TaskService } from './../shared/task.service';
import { Task } from './../shared/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title = 'Nova tarefa';

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      // tslint:disable-next-line: radix
      this.task = this.taskService.getById(parseInt(id));
      this.title = 'Alterando tarefa';
    }
  }

  onSubmit(){
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }

}
