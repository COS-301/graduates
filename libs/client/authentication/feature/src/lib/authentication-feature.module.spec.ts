import { async, TestBed } from '@angular/core/testing';
import { AuthenticationFeatureModule } from './authentication-feature.module';
/*import { LoginCardComponent } from './login-feature/login-card/login-card.component'; 
import { RegistrationCardComponent } from './registration-feature/registration-card/registration-card.component';
import { RegistrationFeatureComponent} from './registration-feature/registration-feature.component'; 
import { LoginFeatureComponent } from './login-feature/login-feature.component';*/
import { AuthenticationMaterialModule } from './materials/authentication-material.module';
import {LoginPageFeatureComponent} from './login-page-feature/login-page-feature.component'
import {RegistrationPageFeatureComponent} from './registration-page-feature/registration-page-feature.component'

describe('AuthenticationFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthenticationFeatureModule,AuthenticationMaterialModule],
      declarations: [ 
                      /*LoginCardComponent,
                      LoginFeatureComponent,
                      RegistrationCardComponent,
                      RegistrationFeatureComponent,*/
                      LoginPageFeatureComponent, 
                      RegistrationPageFeatureComponent, 
                    
                    
                    ]
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AuthenticationFeatureModule).toBeDefined();
  });
}); 
