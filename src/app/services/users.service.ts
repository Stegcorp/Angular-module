import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

  getUser(id): Observable<IUser> {
    return this.http.get<IUser>(this.url + '/' + id);
  }

}
