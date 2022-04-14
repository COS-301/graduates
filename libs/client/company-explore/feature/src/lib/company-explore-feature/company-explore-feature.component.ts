import { Component} from '@angular/core';
import{COMPANY} from './mock-Company-Data';
import{Company} from './mock-Company-interface';
@Component({
  selector: 'graduates-company-explore-feature',
  templateUrl: './company-explore-feature.component.html',
  styleUrls: ['./company-explore-feature.component.scss']
})
export class CompanyExploreFeatureComponent {
  companies:Company[]=COMPANY;
}
