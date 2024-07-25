import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17';
  signUpForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    address: new FormGroup({
      street: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      city: new FormControl('', [Validators.required, Validators.minLength(5)]),
      region: new FormControl('', [Validators.required]),
    }),
  });
  updateProfile() {
    this.signUpForm.patchValue({
      firstName: 'Jane',
      lastName: 'Smith',
      address: {
        street: '123 1st Street',
      },
    });
  }
  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
