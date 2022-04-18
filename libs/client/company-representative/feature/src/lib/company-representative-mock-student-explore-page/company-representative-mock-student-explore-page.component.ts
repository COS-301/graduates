import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'graduates-company-representative-mock-student-explore-page',
  templateUrl: './company-representative-mock-student-explore-page.component.html',
  styleUrls: ['./company-representative-mock-student-explore-page.component.scss']
})
export class CompanyRepresentativeMockStudentExplorePageComponent {
  profilePicture = 'https://s-media-cache-ak0.pinimg.com/236x/c8/e8/cc/c8e8cc83e6eeb60061ba11c9d8ba9a11.jpg';
  mocknames : string[];
  mocktags : string[];

  constructor (private _router: Router) {
    this.mocknames = [
    "Ryan Broemer",
    "Regina Mayo",
    "Samuel Thomson",
    "Paul van Wyk",
    "Moeketsi Malyoi",
    "Robyn Visser",
    "Samantha Smith",
    "Gregory Bond",
    "Yolanda Bylaveld",
    "Samwise Gamgy"
    ];
    this.mocktags = [
      "Computer Science",
      "Informatics",
      "Data Science",
      "Artificial Intelligence",
      "Software Engineer",
      "Software Developer",
      "UI Engineer",
      "Data Engineer",
      "Tester",
      "Security"
      ];
  }

  logout() {
    localStorage.clear();
    this.navigateToLogin();
  }

  navigateToHome() {
    this._router.navigate(['CompanyRepresentativeHome'])
  }

  navigateToLogin() {
    this._router.navigate(['CompanyRepresentativeLogin'])
  }

  navigateToExplore() {
    this._router.navigate(['student-explore'])
  }
}
