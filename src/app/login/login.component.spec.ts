import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgForm } from '@angular/forms';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent,NgForm],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
  //test case for login() with success credentials
  it('should call login function with success credentials', () => {
    component.login({value:{username:"admin",password:"admin"}});
    expect(component.successMessage).toBe("Login Success");
  });

  
 
  //test case for login() with failed credentials
  it('should call login function with failed credentials', () => {
    component.login({value:{username:"admin",password:"admin1"}});
    expect(component.errorMessage).toBe("Invalid Username or Password");
  });



});
