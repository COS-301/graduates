import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CompanyProfileService } from '../services/company-profile.service';

@Component({
  selector: 'graduates-company-bio',
  templateUrl: './company-bio.component.html',
  styleUrls: ['./company-bio.component.scss'],
})
export class CompanyBioComponent implements OnInit {
  companyBio = "";

  constructor(private store: Store, private apiService: CompanyProfileService) {
    
  }

  ngOnInit(): void {
    //make API call to access status of resources for particular company
    this.apiService.getBio('1').subscribe({
      next: (_res) => {
        this.companyBio = _res.data.getCompanyBio.bio;
      },
      error: (err) => { console.log(err); }
    });
  }
}
