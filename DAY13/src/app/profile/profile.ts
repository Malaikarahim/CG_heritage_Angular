import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../students/student';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  name = '';
  email = '';
  phone = '';

  dirty = false;

  constructor(private studentService: StudentService) {}

  typing() {
    this.dirty = true;
  }

  save() {

    this.studentService.addStudent({
      name: this.name,
      email: this.email,
      phone: this.phone
    });

    this.dirty = false;

    alert('Student Added Successfully');

    this.name = '';
    this.email = '';
    this.phone = '';
  }

}