import { Component } from '@angular/core';

@Component({
  selector: 'graduates-company-representative-edit-page',
  templateUrl: './company-representative-edit-page.component.html',
  styleUrls: ['./company-representative-edit-page.component.scss']
})
export class CompanyRepresentativeEditPageComponent {
  profilePicture = 'https://s-media-cache-ak0.pinimg.com/236x/c8/e8/cc/c8e8cc83e6eeb60061ba11c9d8ba9a11.jpg';
  name = "John Doe";
  jobTitle = "Job Title and area of expertise.";
  experience = "Some quick example text to build on the card title and make up the bulk of the card's content";
  about = "Some quick example text to build on the card title and make up the bulk of the card's content";
  number = "0814941334"
  location = "Pretoria, SA";
  email = "johndoe@example.com";
  website = "www.JohnDoe.com";
  linkedin = "@Johndoe";
  twitter = "@johnDoe";
  instagram = "@JohnDoe";
  facebook = "Facebook.com/JohnDoe";
  snapchat = "JohnDoe";
  github = "JohnDoe@github.com";
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
