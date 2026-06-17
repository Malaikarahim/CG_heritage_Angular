import { Routes } from '@angular/router';

import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './profile/profile';
import { NotFound } from './not-found/not-found';

import { authGuard } from './auth/auth-guard';
import { unsavedGuard } from './profile/unsaved-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },

  {
    path: 'profile',
    component: Profile,
    canDeactivate: [unsavedGuard]
  },

  {
    path: 'students',
    loadChildren: () =>
      import('./students/students-module')
        .then(m => m.StudentsModule)
  },

  {
    path: '**',
    component: NotFound
  }

];