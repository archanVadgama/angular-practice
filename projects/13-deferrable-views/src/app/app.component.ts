import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts>Load Posts</button>
      @defer (on interaction(loadPosts)) {
        <app-posts />
      }@loading(minimum 1s) {
        <h2>Loading...</h2>
      }@error {
        <h2>Something went wrong</h2>
      }@placeholder {
        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"/>
      }
    </section>
  `,
})
export class AppComponent {}
