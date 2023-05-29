import { Component } from '@angular/core';
import { User } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usersOfAppComponent: User[] = [];
  public userAdd(users: User[]) {
    this.usersOfAppComponent = users;
  }

}
