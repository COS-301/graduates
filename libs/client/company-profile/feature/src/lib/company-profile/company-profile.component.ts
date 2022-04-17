import { Component } from '@angular/core';

@Component({
  selector: 'graduates-company-profile-feature',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss'],
})
export class CompanyProfileComponent {
  imageUrl = "";
  companyName = "Company Name";
  constructor () {
    //do something
  }
  onClick (val : string) : void {
    const out = document.getElementById("outer");
    const edit = document.getElementById("outer-edit");
    if (val === "edit" && out!==null && edit!==null) {
      out.style.display = "none";
      edit.style.display = "block";
    }
    else if (val === "page" && out!==null && edit!==null) {
      out.style.display = "block";
      edit.style.display = "none";
    }
  }
}