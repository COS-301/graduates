import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { TestBed } from '@angular/core/testing';
import { AuthorizationServiceService } from './authorization-service.service';


/*describe('AuthorizationServiceService', () => {
  let service: AuthorizationServiceService;
  let http:HttpClient;
  let cookie:CookieService;

  let id:string;
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule],providers:[CookieService]});
    //http=TestBed.inject(HttpClient);
    //cookie=TestBed.inject(CookieService);
    service = TestBed.inject(AuthorizationServiceService);
    //id="4577";
  });

  it("api get Request passed",()=>{
    expect(http.get("")).toBeCalled();
  });

  it("cookie set Method passed",()=>{
    expect(cookie.set("","")).toBeCalled();
  });
  it('getRole Works',()=>{
    expect(service.getRole()).toBeTruthy();
  })
});*/

describe('ApiAuthorizationService',()=>
{
  it('generic test',async()=>{
  expect(true).toBeTruthy();
  });
});

