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


# structuring angular projects

* Root module
* Core module
* Feature modules
* Share module

## The Root Module

> The root module takes responsibility for loading all other modules in your app. When you start a new project, Angular creates the app.module into the src/app; it works as your root module.


## The Core Module

> The core module provides root-scoped singleton services and models used in the whole application and doesn’t have any relation to feature modules.

 - constants
 - guards
 - interceptors
 - models


## Feature Modules

> The feature modules contain an application feature—for example, payment, purchase or teams. Each module has components, directives, pipes, pages and interfaces required by the module, creating each as a block.

> The feature module makes your code self-contained, independent and with a single responsibility focused on specific features.

 - module 1
   - components
   - directives
   - pipes
   - pages
 - module 2
 - module 3  



## Shared Modules

> The share module doesn’t relate to a feature; it lists reusable services, components, pipes or directives used in other feature modules.

- components
- pipes
- directives
- service



## ref

[read me](https://www.telerik.com/blogs/angular-basics-tips-structuring-angular-project)