import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  // getPosts()



}
