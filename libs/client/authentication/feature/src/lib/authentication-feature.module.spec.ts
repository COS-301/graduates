import { async, TestBed } from '@angular/core/testing';
import { AuthenticationFeatureModule } from './authentication-feature.module';
//import { LoginCardComponent } from './login-feature/login-card/login-card.component'; 
//import { RegistrationCardComponent } from './registration-feature/registration-card/registration-card.component';
//import { RegistrationFeatureComponent} from './registration-feature/registration-feature.component'; 
import { LoginFormComponent } from './login-feature/login-feature.component';
import { AuthenticationMaterialModule } from './materials/authentication-material.module';
import {LoginPageFeatureComponent} from './login-page-feature/login-page-feature.component'
import {RegistrationPageFeatureComponent} from './registration-page-feature/registration-page-feature.component'

describe('AuthenticationFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthenticationFeatureModule,AuthenticationMaterialModule],
      declarations: [ 
                      //LoginCardComponent,
                      LoginFormComponent,
                      //RegistrationCardComponent,
                      //RegistrationFeatureComponent,
                      LoginPageFeatureComponent, 
                      RegistrationPageFeatureComponent, 
                    
                    
                    ]
    }).compileComponents();
  }));

  it('should have a module definition', () => {
    expect(AuthenticationFeatureModule).toBeDefined();
  });
}); 
