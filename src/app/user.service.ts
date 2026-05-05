import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
}) 
export class UserService {
  users = ['Rashmi', 'Anu'];
  getUsers() {
    return this.users;
  }
}
