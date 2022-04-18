import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativePageComponent } from './company-representative-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('CompanyRepresentativePageComponent', () => {
  let component: CompanyRepresentativePageComponent;
  let fixture: ComponentFixture<CompanyRepresentativePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
=======
      imports: [RouterTestingModule,MatCardModule,MatButtonModule,MatMenuModule,HttpClientModule],
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
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
