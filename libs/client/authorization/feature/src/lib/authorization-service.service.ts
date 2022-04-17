import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { ViewPopUpComponent } from './view-pop-up/view-pop-up.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationServiceService{
  perm:any;
  id="4577";     //The cookie value
  constructor(public dialog: MatDialog,private httpClient:HttpClient) {
    this.httpClient.post("http://localhost:3333/graphql",{query:'query { authorization(id:'+JSON.stringify(this.id)+') { companyId, userRole } }'})
    .subscribe(data=>{
      //alert(JSON.stringify(data));
      this.perm=data;
    });
  }


  /*display():void
  {
    console.log(this.perm.data.authorization.userRole);
  }*/

  getRole():string
  {
    return this.perm.data.authorization.userRole;
  }

  viewError()   //The error popUp
  {
    this.dialog.open(ViewPopUpComponent);
  }

  deleteError()
  {
    this.dialog.open(DeletePopupComponent);
  }

  getCompanyId():string
  {
    return this.perm.data.authorization.companyId;
  }

}
