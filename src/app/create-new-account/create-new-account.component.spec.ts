import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAccountComponent } from './create-new-account.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CreateNewAccountComponent', () => {
  let component: CreateNewAccountComponent;
  let fixture: ComponentFixture<CreateNewAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewAccountComponent],
      schemas: [NO_ERRORS_SCHEMA]

    });
    fixture = TestBed.createComponent(CreateNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //test case for should create
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  //test case for add account
  it('should call add function', () => {
    component.createAccountForm.controls['accountNumber'].setValue('123456');
    component.createAccountForm.controls['accountName'].setValue('tamil');
    component.createAccountForm.controls['accountType'].setValue('savings');
    component.createAccountForm.controls['accountStatus'].setValue('active');
    component.createAccountForm.controls['accountOpenDate'].setValue('2021-09-01');
    component.createAccountForm.controls['accountCloseDate'].setValue('2021-09-01');
    component.createAccountForm.controls['IFSCCode'].setValue('ICIC000123');
    component.createAccountForm.controls['MICRCode'].setValue('123456');
    component.createAccountForm.controls['EmailId'].setValue('');
    component.createAccountForm.controls['accountBalance'].setValue('5000');
    component.createAccountForm.controls['BranchName'].setValue('chennai');
    component.createAccountForm.controls['MobileNumber'].setValue('9876543210');
    component.AddAccount();
    expect(component.createAccountForm.valid).toBeTruthy();
  });
 
  // test case for add account with required validation
  it('should call add function with required validation', () => {
    component.createAccountForm.controls['accountNumber'].setValue('');
    component.createAccountForm.controls['accountName'].setValue('');
    component.createAccountForm.controls['accountType'].setValue('');
    component.createAccountForm.controls['accountStatus'].setValue('');
    component.createAccountForm.controls['accountOpenDate'].setValue('');
    component.createAccountForm.controls['IFSCCode'].setValue('');
    component.createAccountForm.controls['MICRCode'].setValue('');
    component.createAccountForm.controls['EmailId'].setValue('');
    component.createAccountForm.controls['accountBalance'].setValue('');
    component.createAccountForm.controls['BranchName'].setValue('');
    component.createAccountForm.controls['MobileNumber'].setValue('');
    component.AddAccount();
    expect(component.createAccountForm.valid).toBeFalsy();
  });

  // test case for emailValidator
  it('should call emailValidator function', () => {
    
    let EmailId= "tamil@gmail.com"
    let email = component.EmailValidator(EmailId);
    expect(email).toBeNull();

  });

  // test case for invalid EmailId
  it('should call emailValidator function with invalid EmailId', () => {
    component.createAccountForm.controls['EmailId'].setValue('tamil');
    let email = component.EmailValidator(component.createAccountForm.controls['EmailId']);
    expect(email).toEqual({ 'invalidEmail': true });

  });



  // test case for view account
  it('should call view function', () => {
    component.View();
    expect(component.dataSource.length).toBeGreaterThan(0);
  });

  // test case for edit account
  it('should call edit function', () => {
    component.editMode = true;
    component.acctNbr = '123456';
    component.updateAccount();
    let account = component.dataSource.find(x => x.accountNumber == '123456');
    expect(account).toBeTruthy();
  });
// test case for delete account
  it('should call delete function', () => {
    component.deleteAccount('123456');
    let account = component.dataSource.find(x => x.accountNumber == '123456');
    expect(account).toBeFalsy();
  });


  //test case for exportAsExcelFile
  it('should call exportAsExcelFile function', () => {
    component.exportAsXLSX();
    expect(component.exportAsXLSX).toBeTruthy();
  });

});
