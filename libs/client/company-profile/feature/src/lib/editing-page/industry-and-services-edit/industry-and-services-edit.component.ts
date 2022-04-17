import { Component } from '@angular/core';

@Component({
  selector: 'graduates-industry-and-services-edit',
  templateUrl: './industry-and-services-edit.component.html',
  styleUrls: ['./industry-and-services-edit.component.scss'],
})
export class IndustryAndServicesEditComponent {
  industry_and_services: string | undefined = "This are will be used to showcase what projects the company has been working on and what it is currently doing in the industry. This space will help prospective students to understand what they could work on in this company.";
  constructor() {
    //do something
  }
  save () : void {
    this.industry_and_services = document.getElementById("industry_and_services")?.innerHTML;
  }
}
