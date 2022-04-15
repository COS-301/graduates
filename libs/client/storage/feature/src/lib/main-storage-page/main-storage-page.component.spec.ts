import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MainStoragePageComponent } from './main-storage-page.component';
import { RouterTestingModule } from '@angular/router/testing'; 
import { FileUploadService } from "../services/file-upload.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('MainStoragePageComponent', () => {
  let component: MainStoragePageComponent;
  let fixture: ComponentFixture<MainStoragePageComponent>;
  // let teste: MainStoragePageComponent;
  // let route: ActivatedRoute;
  // let myService: FileUploadService;
  // let httpMock: HttpClientTestingModule;
  // let httpClient: HttpClient;

  beforeEach(async(() => {
    // teste = new MainStoragePageComponent(route, myService);
    TestBed.configureTestingModule({
    declarations: [ MainStoragePageComponent ],
    imports: [
        RouterTestingModule,
        HttpClientModule
    ],
    providers: [FileUploadService]
    })
    .compileComponents();
  }));

    // beforeEach(async(() => {
    //   TestBed.configureTestingModule({
    //     imports: [
    //       RouterTestingModule,
    //       HttpClientTestingModule 
    //     ],
    //     declarations: [
    //       MainStoragePageComponent
    //     ],
    //   }).compileComponents();
    // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(MainStoragePageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ MainStoragePageComponent ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStoragePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('FileUploadService', () => {
  let myService: FileUploadService;
  let httpMock: HttpClientTestingModule;
  let httpClient: HttpClient;

  // beforeEach(() =>{
  //   TestBed.configureTestingModule({
  //     imports: [ HttpClientTestingModule ],
  //     providers: [FileUploadService]
  //   });
  //   myService = TestBed.inject(FileUploadService);
  //   httpMock = TestBed.get(HttpTestingController);
  //   httpClient = TestBed.inject(HttpClient)
  // })
  
  // fit('should be created', () => {
  //   expect(myService).toBeTruthy();
  // })

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [FileUploadService]
    });
  });
  
  it('should be created', inject([FileUploadService], (service: FileUploadService) => {
    expect(service).toBeTruthy();
  }));

})
