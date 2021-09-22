import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../Moduls/Todo';
import { Observable } from 'rxjs';

const headerOptions = {
 headers: new HttpHeaders({
  "Content-Type":"application/json"
})
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todosUrl = "https://jsonplaceholder.typicode.com/todos"
todosLimits = "?_limit=5"


  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimits}`)
  }

  todocompleted(todo: Todo):Observable<any> {
    return this.http.put(`${this.todosUrl}/${todo.id}`, todo, headerOptions)
  }
  deleteTodo(todo: Todo):Observable<Todo> {
    return this.http.delete<Todo>(`${this.todosUrl}/${todo.id}`, headerOptions)
  }
  addTodo(todo: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, headerOptions)
  }

}
