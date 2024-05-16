import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test case for addAccount service
  it('should add account', () => {
    let account = {
      accountNumber: '123',
      accountName: 'John Doe',
      accountType: 'Savings',
      accountStatus: 'Active',
      accountOpenDate: new Date(),
      accountCloseDate:'',
      IFSCCode: '1234',
      MICRCode: '123456789',
      EmailId:'',
      AccountBalance:1000,
      BranchName:'Chennai',
      MobileNumber:9876543210


    };
    service.addAccount(account);
    let accounts = service.getAccounts();
    accounts = accounts.filter(acc => acc.accountNumber === '123');
    expect(accounts.length).toBe(1);
   
  });

  // failed test case for addAccount service
  it('should not add account', () => {
    let account = {
      accountNumber: '123',
      accountName: 'John Doe',
      accountType: 'Savings',
      accountStatus: 'Active',
      accountOpenDate: new Date(),
      accountCloseDate:'',
      IFSCCode: '1234',
      MICRCode: '123456789',
      EmailId:'',
      AccountBalance:1000,
      BranchName:'Chennai',
      MobileNumber:9876543210
    };
    service.addAccount(account);
    let accounts = service.getAccounts();
    accounts = accounts.filter(acc => acc.accountNumber === '124');
    expect(accounts.length).toBe(0);

   
   
  });

  // test case for getAccounts service
  it('should get accounts', () => {
    let accounts = service.getAccounts();
    expect(accounts).toBeTruthy();
  });

  //test case for updateAccount service
  it('should update account', () => {
    let account = {
      accountNumber: '123',
      accountName: 'John Doe',
      accountType: 'Savings',
      accountStatus: 'Active',
      accountOpenDate: new Date(),
      accountCloseDate:'',
      IFSCCode: '1234',
      MICRCode: '123456789',
      EmailId:'',
      AccountBalance:1000,
      BranchName:'Chennai',
      MobileNumber:9876543210
    };
    service.addAccount(account);
    account.accountName = 'Jane Doe';
    service.updateAccount(account);
    let accounts = service.getAccounts();
    accounts = accounts.filter(acc => acc.accountNumber === '123');
    expect(accounts[0].accountName).toBe('Jane Doe');
  });
  // account not foulnd test case for updateAccount service
  it('should not update account', () => {
    
    let accounts = service.getAccounts();
    accounts = accounts.filter(acc => acc.accountNumber === '124');
    expect(accounts.length).toBe(0);
  });

  // test cases for exportasExcelFile service
  it('should export as excel file', () => {
    service.exportAsExcelFile([], 'sample');
    expect(service.exportAsExcelFile).toBeTruthy();
  });

  
  

  
});
