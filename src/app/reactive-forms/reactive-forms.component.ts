import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  userForm = new FormGroup ({
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    password: new FormControl('')
  })
  onSubmit() {
    alert('reactive form submitted')
    console.log(this.userForm.value, 'reactive forms')
  }
}
