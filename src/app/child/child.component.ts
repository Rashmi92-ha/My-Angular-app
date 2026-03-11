import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() name!: string;
  @Output() saveEvent = new EventEmitter<string>();
  message = '';
  showSuccessMessage = false;

  onSave() {
    alert('save button clicked');
  } 
  onClickButton() {
    this.saveEvent.emit('Data Saved successfully');
    this.message = 'Welcome to Angular';
    this.showSuccessMessage = true;
  }
}
