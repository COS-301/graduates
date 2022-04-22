//Basic Modules
import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import {Routing} from
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
/*import { LoginComponent } from './GoogleSocialLogin/login.component';
import { SocialLoginModule,SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { environment } from 'src/environments/environment';*/ 

//Material Modules

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

//Component Modules

//import { RegistrationFeatureComponent } from './registration-feature/registration-feature.component';
import { LoginPageFeatureComponent } from './login-page-feature/login-page-feature.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationPageFeatureComponent } from './registration-page-feature/registration-page-feature.component';
import { AuthRoutingModule } from './auth-routing-module';
import { RegistrationFeatureComponent } from './registration-feature/registration-feature.component';
//import {User} from './login-feature/login-form/user'; 




@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    BrowserModule,
    AuthRoutingModule, 
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    ReactiveFormsModule, 
    
  ],
  declarations: [
    
                  RegistrationFeatureComponent,  
                  LoginPageFeatureComponent, 
                  LoginFormComponent, 
                  RegistrationPageFeatureComponent
                  
                  
                ], 

  exports: [

    LoginFormComponent,
    RegistrationPageFeatureComponent,
    LoginPageFeatureComponent, 
    RegistrationFeatureComponent
  ]

  
})
export class AuthenticationFeatureModule {}

