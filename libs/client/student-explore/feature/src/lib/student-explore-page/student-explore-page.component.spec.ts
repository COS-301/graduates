import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExplorePageComponent } from './student-explore-page.component';

describe('StudentExplorePageComponent', () => {
  let component: StudentExplorePageComponent;
  let fixture: ComponentFixture<StudentExplorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExplorePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExplorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
