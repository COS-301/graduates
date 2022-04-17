import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaEditComponent } from './social-media-edit.component';

describe('SocialMediaEditComponent', () => {
  let component: SocialMediaEditComponent;
  let fixture: ComponentFixture<SocialMediaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
