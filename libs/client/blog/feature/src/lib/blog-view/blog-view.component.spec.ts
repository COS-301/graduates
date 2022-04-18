import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogViewComponent } from './blog-view.component';
import { RouterTestingModule } from "@angular/router/testing";

// To run test "yarn test client-blog-feature"
describe('BlogViewComponent', () => {
  let component: BlogViewComponent;
  let fixture: ComponentFixture<BlogViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogViewComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be able to view a blog', () => {
    expect(component).toBeTruthy();
  });
});
