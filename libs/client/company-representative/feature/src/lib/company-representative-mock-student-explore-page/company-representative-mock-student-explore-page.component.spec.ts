import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

=======
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloModule } from 'apollo-angular';
>>>>>>> 6e6948a99aa5266ce8bf87d411ce50c25d42683e
import { CompanyRepresentativeMockStudentExplorePageComponent } from './company-representative-mock-student-explore-page.component';

describe('CompanyRepresentativeMockStudentExplorePageComponent', () => {
  let component: CompanyRepresentativeMockStudentExplorePageComponent;
  let fixture: ComponentFixture<CompanyRepresentativeMockStudentExplorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
=======
      imports: [RouterTestingModule,MatCardModule,MatButtonModule,MatMenuModule, ApolloModule],
>>>>>>> 6e6948a99aa5266ce8bf87d411ce50c25d42683e
      declarations: [ CompanyRepresentativeMockStudentExplorePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeMockStudentExplorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
