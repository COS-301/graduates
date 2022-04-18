import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBodyComponent } from './profile-body.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

describe('ProfileBodyComponent', () => {
  let component: ProfileBodyComponent;
  let fixture: ComponentFixture<ProfileBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBodyComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule], 
      providers: [ProfileBodyComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
