import { Component } from '@angular/core';
import {
ReactiveFormsModule,
FormGroup,
FormControl,
Validators
} from '@angular/forms';

@Component({
selector:'app-q2',
standalone:true,
imports:[ReactiveFormsModule],
templateUrl:'./q2.html',
styleUrl:'./q2.css'
})
export class Q2Component {

jobForm=new FormGroup({

fullName:new FormControl('',[
Validators.required,
Validators.minLength(3)
]),

email:new FormControl('',[
Validators.required,
Validators.email
]),

experience:new FormControl('',[
Validators.required,
Validators.min(0),
Validators.max(40)
]),

role:new FormControl('',[
Validators.required
])

});

onSubmit(){

if(this.jobForm.valid){

console.log(this.jobForm.value);
alert("Submitted Successfully");

}else{

this.jobForm.markAllAsTouched();

}

}

}