
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { ApolloModule, ApolloBase } from "apollo-angular";
import { HttpClientModule } from '@angular/common/http';
import { DeleteAllComponent } from './delete-all.component';
import { ApolloCache, ApolloClient, ApolloLink } from "@apollo/client/core";

describe('DeleteAllComponent', () => {
  let component: DeleteAllComponent;
  let fixture: ComponentFixture<DeleteAllComponent>;

beforeEach(async(() => {
  // teste = new DeleteAllComponent(route, myService);
  TestBed.configureTestingModule({
  declarations: [ DeleteAllComponent ],
  imports: [
      RouterTestingModule, ApolloModule,
      HttpClientModule
  ],
  providers: [ApolloModule]
  })
  .compileComponents();
}));

// beforeEach(() => {
//   fixture = TestBed.createComponent(DeleteAllComponent);
//   component = fixture.componentInstance;
//   fixture.detectChanges();
// });

// it('should create', () => {
//   // expect(component).toBeTruthy();
// });

it('should be created', inject([ApolloModule], (service: ApolloModule) => {
  expect(service).toBeTruthy();
}));

});

describe('ApolloModule', () => {

beforeEach(() =>{
  TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [ApolloModule]
  });
});

beforeEach(async(() => {
  TestBed.configureTestingModule({
    providers: [ ApolloModule ],
    declarations: [ DeleteAllComponent ]
  })
  .compileComponents();
}));

it('should be created', inject([ApolloModule], (service: ApolloModule) => {
  expect(service).toBeTruthy();
}));

})