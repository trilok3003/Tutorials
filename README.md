# Angular17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Signal
- Angular Signals represent a new way to build reactive apps, built on top of reactive primitives that emit updates when their underlying values change.
- A signal is like a container that holds a value (like a number or a string) and tells other parts of your app when this value changes. When you use a signal, Angular keeps an eye on it, so it knows exactly when and how it’s used.

- The Signals API is a small and easy-to-use API, with three main reactive primitives, to tell Angular when and where the data changes.

- The three are:

1. Writable signals: These are signals that you can change. For example, if you have a signal for a number, you can increase or decrease this number.
2. Computed signals: Their value depends on other signals. If the signal they depend on changes, they change too.
3. Effects: These are special functions that respond when signal values change.


- a signal is a variable that holds a value, created by the signal()