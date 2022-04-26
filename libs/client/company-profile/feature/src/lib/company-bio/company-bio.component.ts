import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngxs/store';
import { CompanyProfileService } from '../services/company-profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'graduates-company-bio',
  templateUrl: './company-bio.component.html',
  styleUrls: ['./company-bio.component.scss'],
})
export class CompanyBioComponent implements OnInit {
  companyBio = "";
  message = "";
  subscription = new Subscription;

  constructor(private apiService: CompanyProfileService) {
    
  }

  ngOnInit(): void {
    this.subscription = this.apiService.currentMessage.subscribe(message => this.message = message)
    //make API call to access status of resources for particular company
    this.apiService.getBio().subscribe({
      next: (_res) => {
        this.companyBio = _res.data.getCompanyBio.bio;
        this.newMessage(_res.data.getCompanyBio.bio);
      },
      error: (err) => { console.log(err); }
    });
    
  }

  newMessage(mes:string){
    this.apiService.changeMessage(mes);
  }
}
