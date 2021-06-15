import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('this is a test!', true),
    new Todo('Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor, consequuntur porro eveniet sint corrupti voluptatem quisquam iure minima deleniti saepe incidunt iusto, aliquid quam fugit facilis suscipit reiciendis at.')
  ];

  constructor() {}

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updateTodo:Todo){
    this.todos[index] = updateTodo
  }
  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }
}