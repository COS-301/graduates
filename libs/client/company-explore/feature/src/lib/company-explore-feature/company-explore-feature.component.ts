import { Component,OnInit} from '@angular/core';
import{Company} from './store/company-model';
import{Select,Store} from '@ngxs/store';
import { CompanyExploreState } from './store/company-explore.state';
import{Observable} from 'rxjs';
import { GetCompanyList,SetSelectedCompany } from './store/company-explore.actions';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'graduates-company-explore-feature',
  templateUrl: './company-explore-feature.component.html',
  styleUrls: ['./company-explore-feature.component.scss']
})
export class CompanyExploreFeatureComponent implements OnInit {
  @Select(CompanyExploreState.getCompanyList) companies!:Observable<Company[]>;

  constructor(private store:Store,private route:ActivatedRoute){}
  ngOnInit(): void {
        this.store.dispatch(new GetCompanyList());
  }

  searchGames(){console.log("yo2")};
}
