import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'graduates-company-explore-searchbar',
  templateUrl: './company-explore-searchbar.component.html',
  styleUrls: ['./company-explore-searchbar.component.scss']
})
export class CompanyExploreSearchbarComponent{
  search!:string;
  constructor(private router: Router,private route:ActivatedRoute)
  {
    this.route.params.subscribe((params:Params)=>{
      if(params['search'])
      {
        this.search=params['search'];
      }
      else
      {
        this.search="";
      }});
  }
  onSubmit(form:NgForm){
    this.router.navigate(['company-explore/search',form.value.search])
  }
}
