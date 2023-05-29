import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../app-interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

 @Output() onAddUserClick=new EventEmitter<User[]>();
  users: User[] = [
    {
      email: 'email@yahoo.com',
      address: 'addres yahoo.com',
      password: 'passwordYahoo'
    },
    {
      email: 'email@gmail.com',
      address: 'addres yahoo.com',
      password: 'passwordYahoo'
    },
    {
      email: 'email@hotmail.com',
      address: 'addres yahoo.com',
      password: 'passwordYahoo'
    },
    {
      email: 'email@outlook.com',
      address: 'addres yahoo.com',
      password: 'passwordYahoo'
    }
  ];
  public addUser(email: string, addres: string, password: string, e: Event) {
    e.preventDefault();
    let user: User = {
      email: email,
      address: addres,
      password: password
    }
    this.users.push(user);
    this.onAddUserClick.emit(this.users);
  };

}
