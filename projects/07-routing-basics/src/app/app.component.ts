import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingsComponent } from "./greetings.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GreetingsComponent],
  template: ` <h1>Enable routing to see the greeting below</h1>
  <app-greetings/> `,
  styles: [],
})
export class AppComponent {
  title = '07-routing-basics';
}
