import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
