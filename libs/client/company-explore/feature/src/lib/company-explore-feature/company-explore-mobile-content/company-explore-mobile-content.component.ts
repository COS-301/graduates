import { Component, Input} from '@angular/core';
import{Company} from '../store/company-model';
import{Observable} from 'rxjs';
@Component({
  selector: 'graduates-company-explore-mobile-content',
  templateUrl: './company-explore-mobile-content.component.html',
  styleUrls: ['./company-explore-mobile-content.component.scss']
})
export class CompanyExploreMobileContentComponent{
  @Input() companies!:Observable<Company[]>;
}