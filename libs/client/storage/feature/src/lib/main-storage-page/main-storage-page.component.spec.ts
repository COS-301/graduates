import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MainStoragePageComponent } from './main-storage-page.component';
import { RouterTestingModule } from '@angular/router/testing'; 
import { FileUploadService } from "../services/file-upload.service";
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
    providers: [FileUploadService]
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

describe('FileUploadService', () => {

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

