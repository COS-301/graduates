import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyRepresentativeEditPageComponent } from './company-representative-edit-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CompanyRepresentativeEditPageComponent', () => {
  let component: CompanyRepresentativeEditPageComponent;
  let fixture: ComponentFixture<CompanyRepresentativeEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,RouterTestingModule,MatIconModule,MatCardModule,MatButtonModule,MatMenuModule,FormsModule,HttpClientModule,ApolloModule],
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
