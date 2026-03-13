import { Component } from '@angular/core';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrl: './user-forms.component.scss',
})
export class UserFormsComponent {
  public userName = '';
  public emailId = '';
  public name = '';
  public mail = '';
  public phone = '';
  public password = '';

  onSubmit() {
    alert('Submit successfull');
    this.userName = '';
    this.emailId = '';
  }
  onClick(form: any) {
    console.log(this.name, this.mail , this.phone, this.password)
    alert('User form submitted')
    form.reset();
  }
}
