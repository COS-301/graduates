<<<<<<< HEAD
import { Component} from '@angular/core';
=======
import { Component,OnInit} from '@angular/core';
import{Company} from './store/company-model';
import{Select,Store} from '@ngxs/store';
import { CompanyExploreState } from './store/company-explore.state';
import{Observable} from 'rxjs';
import { GetCompanyList,SetSearch,SetSelectedCompany } from './store/company-explore.actions';
import { ActivatedRoute, Params, Router } from '@angular/router';
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef

@Component({
  selector: 'graduates-company-explore-feature',
  templateUrl: './company-explore-feature.component.html',
  styleUrls: ['./company-explore-feature.component.scss']
})
<<<<<<< HEAD
export class CompanyExploreFeatureComponent {}
=======


export class CompanyExploreFeatureComponent implements OnInit {

@Select(CompanyExploreState.getCompanyList) companies!:Observable<Company[]>;
  
public isMobile:boolean;
  constructor(private store:Store,private route:ActivatedRoute,private router:Router)
  {

    this.isMobile=this.IsViewMobile();

  }
  IsViewMobile():boolean
  {
    if(window.innerWidth<576)
    { return true;}
    else{return false;}
  }
  ngOnInit(): void 
  {
    this.store.dispatch(new GetCompanyList());
    this.route.params.subscribe((params:Params)=>{
      if(params['search'])
      {
        this.store.dispatch(new SetSearch(params['search']));
        
      }
      else
      {
        this.store.dispatch(new SetSearch(""));
      }
      
    });
  }
}
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
