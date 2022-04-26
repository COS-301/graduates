import {Component} from '@angular/core';
import {Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'graduates-company-explore-filter',
  templateUrl: './company-explore-filter.component.html',
  styleUrls: ['./company-explore-filter.component.scss']
})
export class CompanyExploreFilterComponent{
  constructor(private router: Router)
  {
     
  }
  onClick(filter:string){
    this.router.navigate(['company-explore/filter',filter])
  }
}