import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

export function ageValidator(
  control: AbstractControl
): ValidationErrors | null {

  if (!control.value) {
    return null;
  }

  const dob = new Date(control.value);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();

  if (age < 16) {

    return {
      ageError: true
    };

  }

  return null;
}

@Component({
  selector: 'app-q5',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './q5.html',
  styleUrl: './q5.css'
})
export class Q5Component {

  studentForm = new FormGroup({

    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    dob: new FormControl('', [
      Validators.required,
      ageValidator
    ]),

    gender: new FormControl('', [
      Validators.required
    ])

  });

  onSubmit() {

    if (this.studentForm.valid) {

      console.log(this.studentForm.value);

      alert("Registration Successful");

    } else {

      this.studentForm.markAllAsTouched();

    }

  }

}