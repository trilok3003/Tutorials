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

# Testing Tutorial Stories

1. -[x] Testing services
2. -[x] [Spy/spyOn/createSpyObject] Spy is used for calling actual function or not .
3. createSpyObj
4. -[x] beforeEach (removing duplicate code)
5. -[x] TESTBED utility is used for not create instance menualy [used dependency injection]
6. -[x] http service
7. - [x] component
8. - [x] dom interaction
9. - [x] asynchronus
10. - [x] promise / observable
11. - [x] pipes
12. - [x] directives
13. - [x] routing
14. -[x] code coverage

# Unit Testing

- A Software Developement Process
- Individual units are tested
- Code Quality
- Saves times and money
- Better code more efficiently
- Developers do unit testing


# rule (AAA)

1. Arrange (arranging data)
2. Act (performing actual logic)
3. Assert (verification of test results)

``` 

it("should test multiplication of number",()=>{
	// Arrange
	let firstNumber = 10;
	let secondNumber = 10;
	
	// Act
	let result = multiply(firstNumber,secondNumber);

	//Assert
	expect(result).toBe(100);
})

```


# Jasmine
- jasmine is a behavior-driven development (BDD) testing framework

# Karma

- karma is a test runner that runs test cases that are written by using the Jasmine framework
- It provides some features like code coverage, live reloading test files, and integration with continuous integration (CI) tools.

# sample

Describe - It - Expect

# Mocking
- Mocking is nothing but a complete replacement of a real object

``` 

// app.component.spec.ts test file
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from "./product.service";
import { of } from 'rxjs';

// providing mock implementation
class MockProductService {
  getProducts() {
    const mockProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      // Add more mock products as needed
    ];
    return of(mockProducts);
  }
}
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let productService: ProductService;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: ProductService, useClass: MockProductService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
  });

  it('should retrieve products', fakeAsync(() => {
    component.getProducts();
    tick();
    expect(component.products).toEqual([
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' }
    ]);
  }));
});

```

# Spy
- Spy is a feature of Jasmine that allows you to take a control of class, function, or object and modify the behavior in such a way as you want

``` 

// app.component.spec.ts test file
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let productService: ProductService;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule],
      providers: [ProductService]
    }).compileComponents();

    productService = TestBed.inject(ProductService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should retrieve products', fakeAsync(() => {
    // Create a spy on the getProducts method of the ProductService
    const mockProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' }
    ]
    const productServiceSpy = spyOn(productService, 'getProducts').and.returnValue(of(mockProducts));

    // Call the getProducts method of the component
    component.getProducts();

    // Use tick() to simulate the passage of time until all asynchronous operations are completed
    tick();

    // Now you can assert that the component's products property has been updated
    expect(component.products).toEqual(mockProducts);

    // Verify that the getProducts method of the ProductService was called
    expect(productServiceSpy).toHaveBeenCalled();
  }));
});



```
# Testing asynchronous code
- Angular provides three ways to test asynchronous code
1. Using "async" and "fixture.whenStable" (use while  time is not a critical factor)
2. Using "fakeAsync" and "tick" or "flush" ( time is  a critical factor)
3. Using "done: DoneFn" ( deal with callback-based asynchronous operations)



# commands

- for run test `npm run test`
-  no Watch Mode
`ng test --code-coverage`

-   Watch Mode

`ng test --code-coverage --watch`

coverage folde -> index.html

# Code Coverage

- Code coverage is a feature provided by the Jasmine framework that shows how much code is covered in unit testing.

1. line Coverage (It measures the total percentage of lines which is covered by unit test cases.)
2. function Coverage (Measures the percentage of functions covered by test cases. Useful for detecting unused functions.)
3. Branch Coverage (Measures the percentage of branches executed by a test cases.)

# Best Practices for Writing Effective Test Cases

1. Unitwise testing: To ensure that each unit test operates independently, free from dependency on the order of execution or external factors.

2. Expect pure test output: To ensure that unit tests consistently get the same outcomes when provided same inputs. This practice decreases the conflicts due to undesirable test outputs.

3. Write readable test cases: Write unit tests in a manner that is easy to comprehend, maintain, and debug. Test cases should be well organized to enhance the overall readability of the tests.

4. Don't write business logic inside test cases: The spec file is only used to test the code written in the .ts file do not write any other external logic in the spec.ts file

5. Test cases should be up to date: Any modifications to the codebase should pass the test cases or if any other code is added to our code base then it is a must to write their test cases.

6. It should meet the standard code coverage percentage: The standard code coverage for Angular tests is 70% to 80%. However, this should not be used as the only measure of code quality, as it is possible to have high coverage ​with low-quality tests.

# reference

-[angularminds](https://www.angularminds.com/blog/writing-your-first-angular-unit-test-step-by-step-tutorial)
- [2](https://medium.com/@akankshasingh872/writing-angular-test-cases-for-router-service-activatedroute-f28df460487a)
- [3](https://dev.to/this-is-angular/testing-angular-routing-components-with-the-routertestingmodule-4cj0)