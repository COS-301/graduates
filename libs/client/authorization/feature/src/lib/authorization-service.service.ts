import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationServiceService {
  perm:any;
  id="45543";  /* Going to be replaced with the userId extracted from a cookie*/
  constructor(private httpClient:HttpClient) {

    this.httpClient.post("http://localhost:3333/graphql",{query:'query { authorization(${id}) { userId, userRole } }'}).subscribe(data=>{   //Subscribing to the observable that is returned by http client
      this.perm=data;
    });
   }

  getRole():string
  {
    return this.perm.userRole;
  }




  getPermission()
  {
    return this.httpClient.get("http://localhost:3000/User")
  }
}
