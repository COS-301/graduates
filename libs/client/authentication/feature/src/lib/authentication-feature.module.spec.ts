import { async, TestBed } from '@angular/core/testing';
import { AuthenticationFeatureModule } from './authentication-feature.module';
import { RegistrationCardComponent } from './registration-feature/registration-card/registration-card.component';
import { RegistrationFeatureComponent} from './registration-feature/registration-feature.component'; 
import { AuthenticationMaterialModule } from './materials/authentication-material.module';
import {LoginPageFeatureComponent} from './login-page-feature/login-page-feature.component'; 
import {LoginFormComponent} from './login-form/login-form.component'; 
import {RegistrationPageFeatureComponent} from './registration-page-feature/registration-page-feature.component'

describe('AuthenticationFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthenticationFeatureModule,AuthenticationMaterialModule],
      declarations: [ 
                      
                      RegistrationCardComponent,
                      RegistrationFeatureComponent,
                      LoginPageFeatureComponent, 
                      LoginFormComponent,
                      RegistrationPageFeatureComponent, 
                    
                    
                    ]
    }).compileComponents();
  }));


  it('should have a module definition', () => {
    expect(AuthenticationFeatureModule).toBeDefined();
  });
});
