import { Component } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    FormsModule
  ],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {

  students = [
    { id: 1, name: 'MALAIKA' },
    { id: 2, name: 'RAM' },
    { id: 3, name: 'Mary' },
    { id: 4, name: 'ABHISHEK' },
    { id: 5, name: 'Sam' }
  ];

  searchName = '';
  searchValue = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.searchValue = params['search'] || '';
    });

  }

  search() {

    this.router.navigate(
      ['/students'],
      {
        queryParams: {
          search: this.searchName
        }
      }
    );

  }

}