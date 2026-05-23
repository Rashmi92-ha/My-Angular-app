import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  responseMessage: any;
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(private userService: UserService) {}
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm,"userform")
      this.userService.addUsers(this.userForm.value).subscribe((res: any) => {
        console.log(res);
        this.responseMessage = alert('User saved successfully ✅');
        this.userForm.reset();
      });
    } else {
      this.responseMessage = alert('Please fill all fields correctly ❌');
    }
  }
}
