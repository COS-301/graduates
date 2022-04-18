import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngxs/store';
import { CompanyProfileService } from '../services/company-profile.service';

@Component({
  selector: 'graduates-company-profile-feature',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss'],
})
export class CompanyProfileComponent implements OnInit{
  imageUrl = "";
  companyName = "Company Name";
  
  constructor(private apiService: CompanyProfileService) {
    
  }

  ngOnInit(): void {
    //make API call to access status of resources for particular company
    this.apiService.getCompany().subscribe({
      next: (_res) => {
        this.companyName = _res.data.getCompanyByID.name;
      },
      error: (err) => { console.log(err); }
    });
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

  reloadCurrentPage() {
    window. location. reload();
  }
}