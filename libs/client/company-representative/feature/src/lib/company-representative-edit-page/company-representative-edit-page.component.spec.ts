import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyRepresentativeEditPageComponent } from './company-representative-edit-page.component';

describe('CompanyRepresentativeEditPageComponent', () => {
  let component: CompanyRepresentativeEditPageComponent;
  let fixture: ComponentFixture<CompanyRepresentativeEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,MatCardModule,MatButtonModule,MatMenuModule],
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
