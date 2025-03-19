import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'custom-user-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      user-info works!
    </p>
  `,
  styles: ``
})
export class UserInfoComponent {

}
