import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativePageComponent } from './company-representative-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { MatIconModule } from '@angular/material/icon';

describe('CompanyRepresentativePageComponent', () => {
  let component: CompanyRepresentativePageComponent;
  let fixture: ComponentFixture<CompanyRepresentativePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
<<<<<<< HEAD
=======
      imports: [RouterTestingModule,MatCardModule,MatButtonModule,MatMenuModule,HttpClientModule],
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
=======
      imports: [RouterTestingModule,MatCardModule,MatButtonModule,MatMenuModule,HttpClientModule,MatIconModule, ApolloModule],
>>>>>>> 6e6948a99aa5266ce8bf87d411ce50c25d42683e
      declarations: [ CompanyRepresentativePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
