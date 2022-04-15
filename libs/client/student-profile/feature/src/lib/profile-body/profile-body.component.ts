/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ApiStudentProfileService } from '../api-student-profile/api-student-profile.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'graduates-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrls: ['./profile-body.component.sass']
})
export class ProfileBodyComponent implements OnInit {

  studentObj: any;

  constructor(private apiCaller: ApiStudentProfileService, private route: ActivatedRoute) { 
    this.studentObj = null;
  }

  ngOnInit(): void {
    this.apiCaller.getStudentDetails().subscribe((data) => {
      this.studentObj = data.data.student;
    });

    console.log(this.route.snapshot.paramMap.get("id"));
  }

}
