import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->
        <input type="text" id="postTitle" [(ngModel)]="postTitle">
        <label for="body">Post Body</label>
        <!-- add the textarea -->
        <textarea id="postBody" [(ngModel)]="postBody"></textarea>
      </section>
      <section>
        <p>Post Title: {{postTitle}}</p>
        <p>Post Body: {{postBody}}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '09-template-driven-forms';
  postTitle =''
  postBody =''
}
