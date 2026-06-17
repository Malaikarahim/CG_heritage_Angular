import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentList } from './student-list/student-list';
import { StudentDetail } from './student-detail/student-detail';
import { studentResolver } from './student-resolver';

const routes: Routes = [
  {
    path: '',
    component: StudentList
  },
  {
    path: ':id',
    component: StudentDetail,
    resolve: {
      student: studentResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }