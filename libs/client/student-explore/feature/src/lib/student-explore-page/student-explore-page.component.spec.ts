import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from '../filter/filter.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { StudentCardComponent } from '../student-card/student-card.component';
import { MobileStudentCardComponent } from '../mobile-student-card/mobile-student-card.component';

import { StudentExplorePageComponent } from './student-explore-page.component';

describe('StudentExplorePageComponent', () => {
  let component: StudentExplorePageComponent;
  let fixture: ComponentFixture<StudentExplorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExplorePageComponent ],
      imports: [FilterComponent, SearchBarComponent, StudentCardComponent, MobileStudentCardComponent]
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
