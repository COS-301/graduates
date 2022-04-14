import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationServiceService {
  perm:any;

  constructor(private httpClient:HttpClient) {

    this.httpClient.get("http://localhost")
    this.httpClient.get("http://localhost:3000/User").subscribe(data=>{   //Subscribing to the observable that is returned by http client
      this.perm=data;
    });
   }


  /*checkPermission(permission:string):boolean
  {
    if(this.perm.userRole==="unknown")
    {
      console.log("You are an Uknown User");
      //this.displayError();
      //Display the PopUp message
      return false;
    }
    else
    {
      if(permission=="edit")
      {
        //Take User to the student Profile
        if(this.perm.isUserPermitted.Edit==="true")
        {
          return true;
        }
      }
      else if(permission=="Access")
      {
        if(this.perm.isUserPermitted.Access==="true")
        {
          return true;
        }
      }
      else if(permission=="Delete")
      {
        if(this.perm.isUserPermitted.Delete==="true")
        {
          return true;
        }
      }
      else
      {
        console.log("You have no permissions here");
        return false;
      }
    }
    return false;
  }*/

  getRole():string
  {
    return this.perm.userRole;
  }




  getPermission()
  {
    return this.httpClient.get("http://localhost:3000/User")
  }
}
