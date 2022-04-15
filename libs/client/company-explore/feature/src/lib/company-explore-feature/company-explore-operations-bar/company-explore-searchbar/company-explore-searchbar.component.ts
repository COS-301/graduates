import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'graduates-company-explore-searchbar',
  templateUrl: './company-explore-searchbar.component.html',
  styleUrls: ['./company-explore-searchbar.component.scss']
})
export class CompanyExploreSearchbarComponent{
  constructor(private router: Router)
  {

  }
  onSubmit(form:NgForm){
    this.router.navigate(['company-explore/search',form.value.search])
  }
}
