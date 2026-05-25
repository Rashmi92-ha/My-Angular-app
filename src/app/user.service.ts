import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  users = ['Rashmi', 'Anu'];
  getUsers() {
    return this.users;
  }
  getHttp(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  addUsers(data: any){
    return this.httpClient.post('https://jsonplaceholder.typicode.com/users',
      data
    )
  }
}
