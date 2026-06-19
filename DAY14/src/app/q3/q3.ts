import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

export function noProfanityValidator(
  control: AbstractControl
): ValidationErrors | null {

  if (
    control.value &&
    control.value.toLowerCase().includes('badword')
  ) {
    return {
      hasProfanity: true
    };
  }

  return null;
}

@Component({
  selector: 'app-q3',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './q3.html',
  styleUrl: './q3.css'
})
export class Q3Component {

  commentForm = new FormGroup({

    comment: new FormControl('', [
      Validators.required,
      noProfanityValidator
    ])

  });

  onSubmit() {

    if (this.commentForm.valid) {

      console.log(this.commentForm.value);

      alert("Comment Submitted Successfully");

    } else {

      this.commentForm.markAllAsTouched();

    }

  }

}