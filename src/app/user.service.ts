import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  users = ['Rashmi', 'Anu'];
  getUsers() {
    return this.users;
  }
  getHttp() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
