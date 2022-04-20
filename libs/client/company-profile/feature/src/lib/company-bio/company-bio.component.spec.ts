import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CompanyBioComponent } from './company-bio.component';

describe('CompanyBioComponent', () => {
  let component: CompanyBioComponent;
  let fixture: ComponentFixture<CompanyBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBioComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("Check Bio Interpolation", () => {
    const bioTag: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#company_bio');
    expect(bioTag).toBeTruthy();
    expect(bioTag.innerHTML).toEqual(component.companyBio);
  });
});
