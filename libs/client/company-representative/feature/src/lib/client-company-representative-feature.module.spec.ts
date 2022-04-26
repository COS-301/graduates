import { async, TestBed } from '@angular/core/testing';
import { ClientCompanyRepresentativeFeatureModule } from './client-company-representative-feature.module';
import { CompanyRepresentativePageComponent } from './company-representative-page/company-representative-page.component';
import { CompanyRepresentativeEditPageComponent } from './company-representative-edit-page/company-representative-edit-page.component';
import { CompanyRepresentativeMockLoginPageComponent } from './company-representative-mock-login-page/company-representative-mock-login-page.component';
import { CompanyRepresentativeMockStudentExplorePageComponent } from './company-representative-mock-student-explore-page/company-representative-mock-student-explore-page.component';
import { ApolloModule } from 'apollo-angular';

describe('ClientCompanyRepresentativeFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientCompanyRepresentativeFeatureModule, ApolloModule],
      declarations:[CompanyRepresentativePageComponent,
                    CompanyRepresentativeEditPageComponent,
                    CompanyRepresentativeMockLoginPageComponent,
                    CompanyRepresentativeMockStudentExplorePageComponent],
    }).compileComponents();
  }));
  // TODO: Add real tests here.
  it('should have a module definition', () => {
    expect(ClientCompanyRepresentativeFeatureModule).toBeDefined();
  });
});
