import { Component, Input } from '@angular/core';
import{Company}from '../../store/company-model';
@Component({
  selector: 'graduates-company-explore-mobile-card',
  templateUrl: './company-explore-mobile-card.component.html',
  styleUrls: ['./company-explore-mobile-card.component.scss']
})
export class CompanyExploreMobileCardComponent  {
  @Input() company!:Company;
}
