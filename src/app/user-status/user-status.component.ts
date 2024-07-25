import { Component } from '@angular/core';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.css'
})
export class UserStatusComponent {
  user = {
    isLoggedIn: true,
    name: 'John Doe',
    status: 'loggedIn' // loggedOut
  };
}
