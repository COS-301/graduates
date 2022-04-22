import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent} from './login-form/login-form.component'; 
import { LoginPageFeatureComponent } from './login-page-feature/login-page-feature.component';
import { RegistrationFeatureComponent } from './registration-feature/registration-feature.component';
import { RegistrationPageFeatureComponent } from './registration-page-feature/registration-page-feature.component';

// Paths for children
@NgModule({
 imports: [
   RouterModule.forChild([
  {
    path: '',
    component: LoginFormComponent,
  },
  {
    path: 'Login',
    component: LoginPageFeatureComponent,
  },
  {
    path: 'Register',
    component: RegistrationFeatureComponent,
  },

  {
    path: 'Registered',
    component: RegistrationPageFeatureComponent,
  },

]),
 ],
})


export class AuthRoutingModule { }
