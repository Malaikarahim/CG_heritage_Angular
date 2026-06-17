import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css'
})
export class StudentDetail {

  student: any;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {

    const name = this.route.snapshot.paramMap.get('id');

    this.student = this.studentService
      .getStudents()
      .find(student => student.name === name);

    console.log(this.student);
  }

}