import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../services/api';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit {

  posts: any[] = [];

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {

    this.api.getPosts().subscribe({

      next: (data) => {

        const titles = [
          'Angular Services',
          'RxJS Operators',
          'REST API Basics',
          'HTTP Methods',
          'Error Handling',
          'Dependency Injection',
          'Observable vs Promise',
          'Angular Components',
          'Routing in Angular',
          'Standalone Components'
        ];

        const descriptions = [
          'Services help us share data and business logic across multiple components.',
          'RxJS operators are used to transform and manage asynchronous data streams.',
          'REST APIs allow communication between frontend applications and servers.',
          'GET, POST, PUT and DELETE methods are used to perform CRUD operations.',
          'Error handling improves application reliability and user experience.',
          'Dependency Injection makes Angular applications modular and maintainable.',
          'Observables provide better handling of asynchronous data compared to promises.',
          'Components are the basic building blocks of Angular applications.',
          'Routing allows navigation between different pages without reloading.',
          'Standalone components simplify Angular development.'
        ];

        this.posts = data.slice(0, 10).map((post: any, index: number) => ({
          ...post,
          title: titles[index],
          body: descriptions[index]
        }));

      },

      error: (err) => {
        console.log(err);
      }

    });

  }

  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }

}