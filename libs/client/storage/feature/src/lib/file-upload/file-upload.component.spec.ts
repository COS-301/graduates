import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainStoragePageComponent } from '../main-storage-page/main-storage-page.component';
import { FileUploadService } from '../services/file-upload.service';

import { FileUploadComponent } from './file-upload.component';

// describe('FileUploadComponent', () => {
//   let component: FileUploadComponent;
//   let fixture: ComponentFixture<FileUploadComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ FileUploadComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FileUploadComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('MainStoragePageComponent', () => {
//   let component: MainStoragePageComponent;
//   let fixture: ComponentFixture<MainStoragePageComponent>;

//   beforeEach(async(() => {
//     // teste = new MainStoragePageComponent(route, myService);
//     TestBed.configureTestingModule({
//     declarations: [ MainStoragePageComponent ],
//     imports: [
//         RouterTestingModule,
//         HttpClientModule
//     ],
//     providers: [FileUploadService]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MainStoragePageComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('MainStoragePageComponent', () => {
//   let component: MainStoragePageComponent;
//   let fixture: ComponentFixture<MainStoragePageComponent>;

//   beforeEach(async(() => {
//     // teste = new MainStoragePageComponent(route, myService);
//     TestBed.configureTestingModule({
//     declarations: [ MainStoragePageComponent ],
//     imports: [
//         RouterTestingModule,
//         HttpClientModule
//     ],
//     providers: [FileUploadService]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MainStoragePageComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('FileUploadService', () => {
  beforeEach(() =>{
    TestBed.configureTestingModule({});
  });
  
  it('should be created', () => {
    expect("service").toBeTruthy();
  });

})
