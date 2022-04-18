import { Component, Input} from '@angular/core';
import{Company} from '../store/company-model';
import{Observable} from 'rxjs';
@Component({
  selector: 'graduates-company-explore-content',
  templateUrl: './company-explore-content.component.html',
  styleUrls: ['./company-explore-content.component.scss']
})
export class CompanyExploreContentComponent{
  @Input() companies!:Observable<Company[]>;
  consoleout(company:Company){
      console.log(company)
  }
  
}