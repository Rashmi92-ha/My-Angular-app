import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss',
})
export class UserDataComponent {
  users: string[] = [];
  httpUser: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.userService.getHttp().subscribe((data) => {
      this.httpUser = data;
    });
  }
}
