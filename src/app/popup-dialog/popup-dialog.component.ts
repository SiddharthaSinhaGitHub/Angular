import { Component, Input,Inject,Injectable } from '@angular/core';
import { Account } from '../create-new-account/Account';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';


@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.css']
})
export class PopupDialogComponent {

  message!: any;
  constructor() 
    { 
      
    }

  

  //closeMe
  public closeMe()
  {
    
  }

  

  
}
