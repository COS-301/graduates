import { Component, Input } from '@angular/core';
import{Company}from '../../store/company-model';

@Component({
  selector: 'graduates-company-explore-card',
  templateUrl: './company-explore-card.component.html',
  styleUrls: ['./company-explore-card.component.scss']
})
export class CompanyExploreCardComponent {
  @Input() company!:Company;
}
