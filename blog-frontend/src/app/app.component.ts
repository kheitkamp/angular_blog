import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog-frontend';
}
