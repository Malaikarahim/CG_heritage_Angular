import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentService } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  students: any[] = [];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

}