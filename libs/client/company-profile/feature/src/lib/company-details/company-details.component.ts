import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngxs/store';
import { CompanyProfileService } from '../services/company-profile.service';

@Component({
  selector: 'graduates-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent implements OnInit {
  number = "";
  location = "";
  emailData:any[] = [];
  emails:string[] = [];

  constructor(private apiService: CompanyProfileService) {
    
  }

  ngOnInit(): void {
    //make API call to access status of resources for particular company
    this.apiService.getNumbers().subscribe({
      next: (_res) => {
        this.number = _res.data.getCompanyNumber.number;
      },
      error: (err) => { console.log(err); }
    });

    this.apiService.getLocation().subscribe({
      next: (_res) => {
        this.location = _res.data.getCompanyLocation[0].location;
      },
      error: (err) => { console.log(err); }
    });

    this.apiService.getEmail().subscribe({
      next: (_res) => {
        this.emailData = _res.data.getCompanyEmail;
        for(let i = 0; i<this.emailData.length;i++){
          this.emails[i] = this.emailData[i].email;
        }
      },
      error: (err) => { console.log(err); }
    });
  }
}
