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


# ivy

> Smaller

- Angular Ivy compiles apps for smaller 
- Small apps are 30% smaller compared to the Angular 8 compile
-  And large apps are 25-40% smaller compared to Angular 8

> Faster, More Efficient Testing

> Debugging Tools

- With Ivy, the `ng` global variable is available

- . We no longer have to insert unnecessary console.log calls or breakpoints to debug our Angular apps.

- ng is only available in development mode. Therefore, outsiders can’t access ng with the production build.

```
const el = document.querySelector("app-root");

//  to get the root Angular component’s element.

ng.getComponent(el);
ng.getDirectives(el);
ng.applyChanges(el)

```

##  ng methods include:

-  `ng.getContext` gets the context of the embedded view like the elements rendered by *ngIf or *ngFor

- ` ng.getDirectiveMetadata`: gets the metadata for a particular directive.

- `ng.getHostElement`: gets the host element for a component or directive instance

- `ng.getInjector`: gets the injector associated with the element, component or directive instance


-  `ng.getListeners`: gets the event listeners associated with the element that’s rendered by a component. Host listeners are not returned with this method

- `ng.getOwningComponent`: gets the component that contains the DOM element

- `ng.getRootComponents`: gets all root elements associated with the DOM element


> Improved Style Merging and Handling

> Lazy Loading

> Improved AOT Compilation

> Template Type Checking

> Rebuild Times

> Globalization

- @angular/localize `ng add @angular/localize` 