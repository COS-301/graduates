/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ApiStudentProfileService } from '../api-student-profile/api-student-profile.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'graduates-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrls: ['./profile-body.component.sass']
})
export class ProfileBodyComponent implements OnInit {

  /* eslint-disable @typescript-eslint/no-explicit-any */
  studentObj: any;

  constructor(private apiCaller: ApiStudentProfileService, private route: ActivatedRoute, private router: Router) { 
    this.studentObj = null;
  }

  ngOnInit(): void {
    this.apiCaller.getStudentDetails().subscribe((data) => {
      if(data.data.student != null) {
        this.studentObj = data.data.student;
      }
      else {
        this.router.navigateByUrl('/not-found');
      }
    });

    console.log(this.route.snapshot.paramMap.get("id"));
  }
}