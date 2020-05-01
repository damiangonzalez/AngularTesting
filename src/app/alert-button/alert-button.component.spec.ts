// Angular Testing Quick Start
// https://www.youtube.com/watch?v=BumgayeUC08
// https://fireship.io/lessons/angular-testing-guide-including-firebase/
import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'

import { AlertButtonComponent } from './alert-button.component';

describe('AlertButtonComponent', () => {
  // fixture is a test environment for this component,
  // provides access to component and it's rendered html
  let fixture: ComponentFixture<AlertButtonComponent>; 

  let component: AlertButtonComponent; // component itself
  let de: DebugElement; // rendered html for component 

  beforeEach(async(() => {
    // TestBed is the primary api for writing unit tests for Angular applications and libraries.
    // Configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.    
    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents(); // compiles components html and css
  }));

  beforeEach(() => {    
    fixture = TestBed.createComponent(AlertButtonComponent); // Fixture for debugging and testing a component.
    component = fixture.componentInstance; // component itself
    de = fixture.debugElement; // rendered html for component
    fixture.detectChanges(); // Angular change detection
  });

  it('should create', () => {
    // Jasmine matchers: https://jasmine.github.io/api/2.7/matchers.html
    expect(component).toBeTruthy(); // check that component is created successfully
  });

  it('should have a message with `mess`', () => {
    // Jasmine matchers: https://jasmine.github.io/api/2.7/matchers.html
    expect(component.content).toContain('mess'); 
  });

  it('should have a message equal to `mess`', () => {
    // Jasmine matchers: https://jasmine.github.io/api/2.7/matchers.html
    expect(component.content).toBe('this is the message'); 
  });

  it('should have a severity greater than 3', () => {
    // Jasmine matchers: https://jasmine.github.io/api/2.7/matchers.html
    expect(component.severity).toBeGreaterThan(3); 
  });

  it('should have an H1 tag of `Alert Button`', () => {
    // Debug Element https://angular.io/api/core/DebugElement
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });

  it('should toggle the boolean value', () => {
    expect(component.hideContent).toBeTruthy(); 
    component.toggle();
    expect(component.hideContent).toBeFalsy(); 
  });

  it('should toggle the boolean value asynchronously', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy(); 
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy(); 
  }));
});
