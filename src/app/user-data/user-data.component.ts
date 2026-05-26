import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss',
})
export class UserDataComponent {
  users: string[] = [];
  httpUser: User[] = [];
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.userService.getHttp().subscribe({
      next: (data: User[]) => {
        this.httpUser = data;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load users ❌';
      },
    });
  }
}
