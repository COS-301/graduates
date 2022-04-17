import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MainStoragePageComponent } from './main-storage-page.component';
import { RouterTestingModule } from '@angular/router/testing'; 
import { ApolloModule } from "apollo-angular";
import { HttpClientModule } from '@angular/common/http';

describe('MainStoragePageComponent', () => {
  let component: MainStoragePageComponent;
  let fixture: ComponentFixture<MainStoragePageComponent>;

  beforeEach(async(() => {
    // teste = new MainStoragePageComponent(route, myService);
    TestBed.configureTestingModule({
    declarations: [ MainStoragePageComponent ],
    imports: [
        RouterTestingModule,
        HttpClientModule
    ],
    providers: [ApolloModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStoragePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

beforeEach(async(() => {
  TestBed.configureTestingModule({
    providers: [ ApolloModule ],
    declarations: [ MainStoragePageComponent ]
  })
  .compileComponents();
}));

describe('ApolloModule', () => {

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ApolloModule]
    });
  });
  
  it('should be created', inject([ApolloModule], (service: ApolloModule) => {
    expect(service).toBeTruthy();
  }));

})

