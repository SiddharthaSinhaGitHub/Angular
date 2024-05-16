import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import forms module
import { FormsModule, ReactiveFormsModule,NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
//import MatDialogModule
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
// import MatTableModule
import { MatTableModule } from '@angular/material/table';
// import MatCardModule
import { MatCardModule } from '@angular/material/card';
// import MatInputModule
import { MatInputModule } from '@angular/material/input';
//import MatformfieldModule



import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { LoginComponent } from './login/login.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    NavMenuComponent,
    CreateNewAccountComponent,
    LoginComponent,
    PopupDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
