import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogCreateComponent } from './blog-create.component';
import { RouterTestingModule } from "@angular/router/testing";

// To run test "yarn test client-blog-feature"
describe('BlogCreateComponent', () => {
  let component: BlogCreateComponent;
  let fixture: ComponentFixture<BlogCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCreateComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a blog', () => {
    expect(component).toBeTruthy();
  });
});
