import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Api } from '../services/api';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit, OnDestroy {

  users: any[] = [];
  searchText = '';

  errorMessage = '';

  destroy$ = new Subject<void>();

  constructor(private api: Api) {}

  ngOnInit(): void {

    this.api.getUsers()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({

        next: data => {

          this.users = data;

        },

        error: err => {

          this.errorMessage = err;

        }

      });

  }

  testError() {

    this.api.getWrongData()
      .subscribe({

        next: data => {

          console.log(data);

        },

        error: err => {

          this.errorMessage = err;

        }

      });

  }

  filteredUsers() {

    return this.users.filter(user =>
      user.name.toLowerCase()
      .includes(this.searchText.toLowerCase())
    );

  }

  ngOnDestroy(): void {

    this.destroy$.next();

    this.destroy$.complete();

  }

}