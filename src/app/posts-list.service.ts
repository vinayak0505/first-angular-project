import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// decorator
@Injectable({
  providedIn: 'root'
})
export class PostsListService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
}
