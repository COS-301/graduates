import { Component } from '@angular/core';

@Component({
  selector: 'graduates-company-representative-title',
  templateUrl: './company-representative-title.component.html',
  styleUrls: ['./company-representative-title.component.scss']
})
export class CompanyRepresentativeTitleComponent {
  profilePicture = 'https://s-media-cache-ak0.pinimg.com/236x/c8/e8/cc/c8e8cc83e6eeb60061ba11c9d8ba9a11.jpg';
  name = "John Doe";
  jobTitle = "Job Title and area of expertise.";
}
