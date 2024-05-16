import { Injectable } from '@angular/core';
//import account model and accounts-data 
import { Account } from './Account';
import { Accounts } from './Accounts-data';
import {saveAs} from 'file-saver'

//import file-saver








@Injectable({
  providedIn: 'root'
})
export class AccountService {
acct:Account[]=[];
  constructor() { }

  getAccounts():any[]
  {
    this.acct=Accounts;

    return Accounts;
    
  }
  //add new account
  addAccount(account:Account)
  {
    Accounts.push(account);
  }
  //update account
  updateAccount(account:Account)
  {
    let index=Accounts.findIndex(acc=>acc.accountNumber==account.accountNumber);
    Accounts[index]=account;
  }

  //add function for exportAsExcelFile
  exportAsExcelFile(accounts: Account[], excelFileName: string): void {
    //create excel file
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(accounts);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, excelFileName);
    });
  }
  //add saveAsExcelFile

  saveAsExcelFile(excelBuffer: any, excelFileName:string):any{
    import("file-saver").then(FileSaver => {
      let data: Blob = new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
      });
      FileSaver.saveAs(data, excelFileName + '_export_' + new Date().getTime() + '.xlsx');
    });
  }
}
