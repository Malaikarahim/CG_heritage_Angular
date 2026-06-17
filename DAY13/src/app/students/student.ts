import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    {
      name: 'Rahul',
      email: 'rahul@gmail.com',
      phone: '9876543210'
    },
    {
      name: 'Abhishek',
      email: 'abhishek@gmail.com',
      phone: '9876543211'
    },
    {
      name: 'Rohan',
      email: 'rohan@gmail.com',
      phone: '9876543212'
    }
  ];

  addStudent(student: any) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }
}