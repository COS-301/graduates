import { Component } from '@angular/core';

@Component({
  selector: 'graduates-company-representative-explore',
  templateUrl: './company-representative-explore.component.html',
  styleUrls: ['./company-representative-explore.component.scss']
})
export class CompanyRepresentativeExploreComponent {
  students: string[];
  constructor() {
    this.students = [
      "Student 1 uXXXXXXXX",
      "Student 2 uXXXXXXXX",
      "Student 3 uXXXXXXXX",
      "Student 4 uXXXXXXXX",
      "Student 5 uXXXXXXXX",
      "Student 6 uXXXXXXXX"
    ];
  }
} 
