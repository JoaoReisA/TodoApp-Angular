import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { Todo } from '../shared/todo.model';
import tippy from 'tippy.js';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

   @Input() todo: Todo = new Todo
   @Output() todoClicked: EventEmitter<void> = new EventEmitter()
   @Output() editClicked: EventEmitter<void> = new EventEmitter()
   @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  
  constructor() { }

  ngOnInit(): void {

  }
  onTodoClicked(){
    this.todoClicked.emit()
  }
  onEditClicked(){
    this.editClicked.emit()
  }

  onDeleteClicked(){
    this.deleteClicked.emit()
  }
}
