import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  showValidationErrors: boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }



  onFormSubmit(form: NgForm){
    if (form.invalid){
      this.showValidationErrors = true
    }
if (!form.invalid){
    this.dataService.addTodo(new Todo(form.value.text))
    this.showValidationErrors = false
    form.reset()
}
  }

  toggleCompleted(todo: Todo){
    //set todo to completed
    todo.completed = !todo.completed;
  }
}
