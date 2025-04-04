import { Component, inject  } from '@angular/core';
import { UserService } from './user.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { User } from './data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[UserInfoComponent],
  template: ` <h1>User Listing</h1> 
  @for(user of userData; track user.id){
    <app-user-info [user]="user"/>
  }
  `,
})
export class AppComponent {

  userService = inject(UserService);
  userData:User[] = []
  
  async ngOnInit():Promise<void>{
    const data = await this.userService.getUserData()
    this.userData = data;
  }

}
