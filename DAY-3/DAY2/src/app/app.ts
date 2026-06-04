import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/*
let:
- Value can be changed later.
*/
let collegeName = "HITK";

/*
const:
- Value cannot be changed after declaration.
*/
const countryName = "India";

interface Student {
  id: number;
  name: string;
  branch: string;
  age: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DAY2');
  //QUESTION 1
   studentName = "RAHUL";
   age=25;
   city="DELHI"
   course="BTECH DATA SCIENCE"

   //QUESTION 3
   courseName:string ="Angular";
   marks:number=90;
   isPassed:boolean=true;

   //QUESTION 4
   student: Student = {
    id: 101,
    name: "Rahul",
    branch: "Data Science",
    age: 25
   };
     // Question 2
  college = collegeName;
  country = countryName;
}