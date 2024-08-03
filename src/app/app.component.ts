import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-Handling Common Reactive/Declarative Scenarios with Signals and RxJS in Angular';
}

// note: I’ve been releasing videos on coding reactively with Angular for a long time now, and almost inevitably there are people who are convinced I am trying to fool them with pretty demos that don’t actually work in the “real world”.

// https://modernangular.com/articles/handling-common-scenarios-reactively-declaratively-with-rxjs-signals

/***
 * topics
 *  1. Reactive State Management with Angular
 *  */ 


/**
 * Conclusion
So there you go - state management for data loading, error handling, manual retries, data filtering, and pagination all in a little over 100 lines of mostly reactive and declarative code that I think also doesn’t require all that much RxJS knowledge
 */