/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationServiceService {
  perm:any;
  id="";     //The cookie value
  array:any;
  array2:any;

  constructor(private httpClient:HttpClient,private cookie:CookieService) {

    this.array=JSON.parse('{"UserId":"c1111","UserToken":"67734hya73ha772as"}');  //Mock Cookie value
    this.cookie.set("UserCookie",JSON.stringify(this.array));  //Initializing a cookie
    this.id=this.getUserID();   //Extracts the cookie from Cookie storage
    this.id=<string>window.prompt("Please enter UserId");   //For testing User Id

    this.httpClient.post("https://301graduates.live:3333/graphql",{query:'query { authorization(id:'+JSON.stringify(this.id)+') { companyId, userRole } }'})
    .subscribe(data=>{
      alert(JSON.stringify(data));
      this.perm=data;
    });

  }

  getRole():string
  {

    return this.perm.data.authorization.userRole;
  }

  getUserID():string
  {
    this.array2=JSON.parse(this.cookie.get("UserCookie"));
    return this.array2.UserId;//fetching the cookie from storage
  }


  getCompanyId():string
  {
    return this.perm.data.authorization.companyId;
  }

}
