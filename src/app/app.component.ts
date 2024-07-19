import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import {
  DatePipe,
  NgOptimizedImage,
  provideImgixLoader,
  UpperCasePipe,
} from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from './services/user.service';
import { StarPipe } from './star.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    CommentsComponent,
    NgOptimizedImage,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    UpperCasePipe,
    DatePipe,
    StarPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    // provideImgixLoader('https://my.base.url/'),
  ],
})
export class AppComponent {
  title = 'angular-17';
  isLoggedIn: boolean = true;
  isServerRunning: boolean = false;
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
  isEditable = true;
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  favoriteFramework = '';
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  userService = inject(UserService);
  userList: string;
  msg = 'we think you are doing great!';
  birthday = new Date(2023, 3, 2);
  word = 'You are a champion';
  constructor() {
    this.userList = this.userService.getUsers().join(' ⭐️ ');
  }
  greet() {
    console.log('Hello, there 👋');
  }
  onIncrementCountEvent(count: number) {
    console.log(count);
  }
  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
