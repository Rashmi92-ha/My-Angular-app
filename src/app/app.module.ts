import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { UserFormsComponent } from './user-forms/user-forms.component';
import { ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {UserDataComponent} from './user-data/user-data.component';
@NgModule({
  declarations: [
    MainComponent,
    ParentComponent,
    ChildComponent,
    UserFormsComponent,
    ReactiveFormsComponent,
    UserDataComponent,
  ],
  imports: [BrowserModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}
