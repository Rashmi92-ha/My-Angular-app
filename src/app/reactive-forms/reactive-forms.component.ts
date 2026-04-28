import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  userForm = new FormGroup ({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    phone : new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  onSubmit() {
    alert('reactive form submitted')
    this.userForm.reset()
  }
}
