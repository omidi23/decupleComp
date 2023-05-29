import { Component, Input } from '@angular/core';
import { User } from '../app-interface';

@Component({
  selector: 'app-add-user-table',
  templateUrl: './add-user-table.component.html',
  styleUrls: ['./add-user-table.component.css']
})
export class AddUserTableComponent {
@Input()  usersOfAddUserTable:User[]=[
    {
      email:'email@yahoo.com',
      address:'addres yahoo.com',
      password:'passwordYahoo'
    },
    {
      email:'email@gmail.com',
      address:'addres yahoo.com',
      password:'passwordYahoo'
    },
    {
      email:'email@hotmail.com',
      address:'addres yahoo.com',
      password:'passwordYahoo'
    },
    {
      email:'email@outlook.com',
      address:'addres yahoo.com',
      password:'passwordYahoo'
    }
  ];
}
