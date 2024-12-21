import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UsDashComponent } from './us-dash/us-dash.component';
import { ExpDashComponent } from './exp-dash/exp-dash.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarSidebarComponent } from './navbar-sidebar/navbar-sidebar.component';
import { ProfExpComponent } from './prof-exp/prof-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UsDashComponent,
    ExpDashComponent,
    NavbarSidebarComponent,
    ProfExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
