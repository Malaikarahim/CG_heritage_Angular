import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-q4',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './q4.html',
  styleUrl: './q4.css'
})
export class Q4Component {

  loginForm = new FormGroup({

    username: new FormControl('', [
      Validators.required
    ]),

    password: new FormControl('', [
      Validators.required
    ])

  });

  onSubmit() {

    if (this.loginForm.valid) {

      console.log(this.loginForm.value);

      alert("Login Successful");

    } else {

      this.loginForm.markAllAsTouched();

    }

  }

}