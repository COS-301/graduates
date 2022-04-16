import { TestBed, inject } from '@angular/core/testing';
import { FileUploadService } from "../services/file-upload.service";
import { HttpClientModule } from '@angular/common/http';

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
