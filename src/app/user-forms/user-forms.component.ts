import { Component } from '@angular/core';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrl: './user-forms.component.scss'
})
export class UserFormsComponent {
  public userName = "";
  public emailId = "";
  onSubmit(){
    alert("User form submitted")
    this.userName = "";
    this.emailId = "";
  }
}
