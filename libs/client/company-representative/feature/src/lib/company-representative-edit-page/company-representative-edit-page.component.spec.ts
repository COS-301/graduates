import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeEditPageComponent } from './company-representative-edit-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';

describe('CompanyRepresentativeEditPageComponent', () => {
  let component: CompanyRepresentativeEditPageComponent;
  let fixture: ComponentFixture<CompanyRepresentativeEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
<<<<<<< HEAD
=======
      imports: [RouterTestingModule,MatCardModule,MatButtonModule,MatMenuModule,HttpClientModule],
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
=======
      imports: [RouterTestingModule,MatCardModule,MatButtonModule,MatMenuModule,HttpClientModule, ApolloModule],
>>>>>>> 6e6948a99aa5266ce8bf87d411ce50c25d42683e
      declarations: [ CompanyRepresentativeEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
