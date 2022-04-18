import { Component,OnInit} from '@angular/core';
import{Company} from './store/company-model';
import{Select,Store} from '@ngxs/store';
import { CompanyExploreState } from './store/company-explore.state';
import{Observable} from 'rxjs';
import { GetCompanyList,SearchCompanyList,FilterCompanyList } from './store/company-explore.actions';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'graduates-company-explore-feature',
  templateUrl: './company-explore-feature.component.html',
  styleUrls: ['./company-explore-feature.component.scss']
})


export class CompanyExploreFeatureComponent {

@Select(CompanyExploreState.getCompanyList) companies!:Observable<Company[]>;
  
public isMobile:boolean;
  constructor(private store:Store,private route:ActivatedRoute,private router:Router)
  {

    this.isMobile=this.IsViewMobile();
    this.route.params.subscribe((params:Params)=>{
      if(params['search'])
      {
        if(params['search'])
        {
          this.store.dispatch(new SearchCompanyList(params['search']));  
        }
        else
        {
          this.store.dispatch(new GetCompanyList());
         
        }
        
      }
      else if(params['filter'])
      {
        this.store.dispatch(new FilterCompanyList(params['filter'].replace(/[%20]/g)));
      }
      else
      {
        this.store.dispatch(new GetCompanyList());
      }
      
    });

  }
  IsViewMobile():boolean
  {
    if(window.innerWidth<576)
    { return true;}
    else{return false;}
  }
 
}
