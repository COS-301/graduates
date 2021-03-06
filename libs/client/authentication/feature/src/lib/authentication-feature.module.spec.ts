import { async, TestBed } from '@angular/core/testing';
import { AuthenticationFeatureModule } from './authentication-feature.module';
import { RegistrationCardComponent } from './registration-feature/registration-card/registration-card.component';
import { RegistrationFeatureComponent} from './registration-feature/registration-feature.component'; 
import { AuthenticationMaterialModule } from './materials/authentication-material.module';
import {LoginPageFeatureComponent} from './login-page-feature/login-page-feature.component'; 
import {LoginFormComponent} from './login-form/login-form.component'; 
import {RegistrationPageFeatureComponent} from './registration-page-feature/registration-page-feature.component'; 
import { FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

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
                      FormGroup,
                      MatCardModule,
                      RouterTestingModule,
                    
                    
                    ]
    }).compileComponents();
  }));


  it('should have a module definition', () => {
    expect(AuthenticationFeatureModule).toBeDefined();
  });
});
