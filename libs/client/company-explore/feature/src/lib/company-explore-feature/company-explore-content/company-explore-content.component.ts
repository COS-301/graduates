import { Component, Input} from '@angular/core';
import{Company} from '../mock-Company-interface';
@Component({
  selector: 'graduates-company-explore-content',
  templateUrl: './company-explore-content.component.html',
  styleUrls: ['./company-explore-content.component.scss']
})
export class CompanyExploreContentComponent{
  @Input() companies!:Company[];
  
}