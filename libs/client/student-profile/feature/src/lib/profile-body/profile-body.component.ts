/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ApiStudentProfileService } from '../api-student-profile/api-student-profile.service';

@Component({
  selector: 'graduates-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrls: ['./profile-body.component.sass']
})
export class ProfileBodyComponent implements OnInit {

  constructor(private apiCaller: ApiStudentProfileService) { }

  ngOnInit(): void {
    this.apiCaller.getStudentDetails();
  }

}
