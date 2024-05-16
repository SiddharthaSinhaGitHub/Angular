import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from './Account';
import { AccountService } from './account.service';



@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent {
  //declare FormGroup variable with name of CreateNewAcount
  
  successMessage: string = '';
  showDialog: string='';
  createAccountForm!: FormGroup;
  dataSource!: Account[];
  editMode: boolean = false;
  addMode: boolean = false;
  acctNbr!: string;
  inputChange: any;
  //add constructor
  constructor(private fb: FormBuilder, private services: AccountService) {
    

  }
  ngOnInit(): void {
    
    this.addMode = true;
    //create form group with name of CreateNewAccount with Required validation
    this.createAccountForm = this.fb.group({
      accountNumber: ['', Validators.required],
      accountName: ['', Validators.required],
      accountType: ['', Validators.required],
      accountStatus: ['', Validators.required],
      accountOpenDate: ['', Validators.required],
      accountCloseDate: [''],
      IFSCCode: ['', [Validators.required, this.IFSCValidator, Validators.minLength(11)]],
      MICRCode: ['', Validators.required],
      EmailId: ['', [this.EmailValidator]],
      accountBalance: ['', [Validators.required, Validators.min(500)]],
      BranchName: ['', Validators.required],
      MobileNumber: ['', [Validators.required, Validators.minLength(10)]]
    })

    this.createAccountForm.get('accountCloseDate')?.disable();
  }
  onChange(event: any) {
    this.inputChange = event.target.value;
    if (this.inputChange == 'Active') {
      //disable accountCloseDate field
      this.createAccountForm.get('accountCloseDate')?.disable();

    }
    else {
      //enable accountCloseDate field
      this.createAccountForm.get('accountCloseDate')?.enable();
    }



  }
  onDateChange(event: any) {
    this.inputChange = event.target.value;
    // accountclosedate should greater than accountOpenDate
    let cl = new Date(this.createAccountForm.value.accountOpenDate);

    if (this.inputChange < cl) {
      //disable accountCloseDate field
      alert("Account Close Date should be greater than Account Open Date");

    }

  }
  //view account details using services
  View() {
    
    this.dataSource = this.services.getAccounts();
    
  }
  AddAccount() {
    
    let account: Account = {
      accountNumber: this.createAccountForm.value.accountNumber,
      accountName: this.createAccountForm.value.accountName,
      accountType: this.createAccountForm.value.accountType,
      accountStatus: this.createAccountForm.value.accountStatus,
      accountOpenDate: new Date(this.createAccountForm.value.accountOpenDate),
      accountCloseDate: this.createAccountForm.value.accountCloseDate,
      IFSCCode: this.createAccountForm.value.IFSCCode,
      MICRCode: this.createAccountForm.value.MICRCode,
      EmailId: this.createAccountForm.value.EmailId,
      AccountBalance: this.createAccountForm.value.accountBalance,
      BranchName: this.createAccountForm.value.BranchName,
      MobileNumber: this.createAccountForm.value.MobileNumber
    }
    this.services.addAccount(account);
    this.successMessage= account.accountNumber+ ":"  + "Record Added Successfully";
    alert("Record Added Successfully");
    
    this.dataSource = this.services.getAccounts();
    this.addMode = false;
  }

  deleteAccount(accountNumber: string) {
    
    this.dataSource = this.services.getAccounts();
    let index = this.dataSource.findIndex((account) => account.accountNumber == accountNumber);
    this.dataSource.splice(index, 1);
    this.successMessage= accountNumber+ ":"  + "Record Deleted Successfully";
    alert("Record Deleted Successfully");
    
  }

  editAccount(accountNumber: string) {

    this.editMode = true;
    this.addMode = false;
    this.dataSource = this.services.getAccounts();

    let index = this.dataSource.findIndex((account) => account.accountNumber == accountNumber);
    //disable accountnumber field
    //this.createAccountForm.get('accountNumber')?.disable();
    this.acctNbr = this.dataSource[index].accountNumber;
    
    if (this.dataSource[index].EmailId == undefined) {
      this.dataSource[index].EmailId = '';
    }
    if (this.dataSource[index].accountCloseDate == undefined) {
      this.dataSource[index].accountCloseDate = '';
    }

    this.createAccountForm.setValue({


      accountNumber: this.dataSource[index].accountNumber,

      accountName: this.dataSource[index].accountName,
      accountType: this.dataSource[index].accountType,
      accountStatus: this.dataSource[index].accountStatus,
      accountOpenDate: (this.dataSource[index].accountOpenDate).toISOString().slice(0, 10),
      accountCloseDate: this.dataSource[index].accountCloseDate,
      IFSCCode: this.dataSource[index].IFSCCode,
      MICRCode: this.dataSource[index].MICRCode,
      EmailId: this.dataSource[index].EmailId,
      accountBalance: this.dataSource[index].AccountBalance,
      BranchName: this.dataSource[index].BranchName,
      MobileNumber: this.dataSource[index].MobileNumber
    })
    this.createAccountForm.get('accountNumber')?.disable();
    //this.dataSource.splice(index,1);
  }

  updateAccount() {

    let account: Account = {
      accountNumber: this.acctNbr,
      accountName: this.createAccountForm.value.accountName,
      accountType: this.createAccountForm.value.accountType,
      accountStatus: this.createAccountForm.value.accountStatus,
      accountOpenDate: new Date(this.createAccountForm.value.accountOpenDate),
      accountCloseDate: this.createAccountForm.value.accountCloseDate ? this.createAccountForm.value.accountCloseDate : '',
      IFSCCode: this.createAccountForm.value.IFSCCode,
      MICRCode: this.createAccountForm.value.MICRCode,
      EmailId: this.createAccountForm.value.EmailId,
      AccountBalance: this.createAccountForm.value.accountBalance,
      BranchName: this.createAccountForm.value.BranchName,
      MobileNumber: this.createAccountForm.value.MobileNumber
    }
    this.services.updateAccount(account);

    //add record suceessfully message
    this.successMessage= account.accountNumber+ ":"  + "Record Updated Successfully";
    alert("Record Updated Successfully");
    
    
    this.dataSource = this.services.getAccounts();
    this.editMode = false;
    this.addMode = true;
    this.createAccountForm.get('accountNumber')?.enable();
    this.clear();

  }
  clear() {
    this.createAccountForm.reset();
    this.createAccountForm.get('accountNumber')?.enable();
  }
  //add custom email validation
  EmailValidator(control: any): any {
    if (control.value) {
      if (control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        return null;
      }
      else {
        return { invalidEmail: true }
      }
    }
  }

  //add custom IFSC code start with SBIN
  IFSCValidator(control: any): any {
    if (control.value) {
      if (control.value.match(/^SBIN/)) {
        return null;
      }
      else {
        return { invalidIFSC: true }
      }
    }
  }

  // add custom accountCloseDate should be greater than accountOpenDate
  compareDate(Close:string,open:string): any {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[open];
      let t = group.controls[Close];
      if (f.value > t.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }
  }



  //add exportAsXLSX function
  exportAsXLSX(): void {
    this.services.exportAsExcelFile(this.dataSource, 'AccountDetails');
  }
}


