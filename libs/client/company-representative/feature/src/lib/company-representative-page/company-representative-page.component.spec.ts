import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyRepresentativePageComponent } from './company-representative-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { MatIconModule } from '@angular/material/icon';

describe('CompanyRepresentativePageComponent', () => {
  let component: CompanyRepresentativePageComponent;
  let fixture: ComponentFixture<CompanyRepresentativePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,MatCardModule,MatButtonModule,MatMenuModule,HttpClientModule,MatIconModule, ApolloModule],
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
