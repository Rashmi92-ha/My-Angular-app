import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserFormsComponent } from './user-forms/user-forms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'reactive-form',
    pathMatch: 'full',
  },
  {
    path: 'reactive-form',
    component: ReactiveFormsComponent,
  },
  {
    path: 'user-data',
    component: UserDataComponent,
  },
  {
    path: 'user-form',
    component: UserFormsComponent,
  },
  {
    path: 'parent-form',
    component: ParentComponent,
  },
  {
    path: 'child-form',
    component: ChildComponent,
  }
];
