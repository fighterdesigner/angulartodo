import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Moduls/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
@Input() todo!: Todo;
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      todo: true,
      is_complete: this.todo.completed
    }

    return classes
  }

  onToggle(todo: Todo) {
    todo.completed = !todo.completed
    this.todoService.todocompleted(todo)
    console.log(todo)
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo)
  }

}
