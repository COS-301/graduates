import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngxs/store';
import { CompanyProfileService } from '../services/company-profile.service';

@Component({
  selector: 'graduates-representative-list',
  templateUrl: './representative-list.component.html',
  styleUrls: ['./representative-list.component.scss'],
})
export class RepresentativeListComponent implements OnInit {
  representativeData: CompanyReps[] = [];
  representatives: Rep[] = []; 

  constructor(private apiService: CompanyProfileService) {
    
  }

  ngOnInit(): void {
    //make API call to access status of resources for particular company
    this.apiService.getRepresentatives().subscribe({
      next: (_res) => {
        this.representativeData = _res.data.getCompanyReps;
        for(let i = 0; i< this.representativeData.length;i++){
          this.representatives[i] = new Rep;
          this.representatives[i].name = "@"+this.representativeData[i].name;
          this.representatives[i].link = "localhost:4200/company-representative/"+this.representativeData[i].id;
        }
      },
      error: (err) => { console.log(err); }
    });
  }
}

class Rep{
  name = "";
  link = ""
}

interface CompanyReps{
    id: string;
    name: string;
    companyId: string
}
