import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeEditPageComponent } from './company-representative-edit-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('CompanyRepresentativeEditPageComponent', () => {
  let component: CompanyRepresentativeEditPageComponent;
  let fixture: ComponentFixture<CompanyRepresentativeEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
=======
      imports: [RouterTestingModule,MatCardModule,MatButtonModule,MatMenuModule,HttpClientModule],
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
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
