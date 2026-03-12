import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { UserFormsComponent } from './user-forms/user-forms.component';
@NgModule({
  declarations: [
    MainComponent,
    ParentComponent,
    ChildComponent,
    UserFormsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}
