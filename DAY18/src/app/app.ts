import { Component } from '@angular/core';

import { Posts } from './components/posts/posts';

@Component({

  selector: 'app-root',

  standalone: true,

  imports: [

    Posts

  ],

  templateUrl: './app.html',

  styleUrl: './app.css'

})

export class App {

  title = 'Angular HTTP Interceptor Demo';

}