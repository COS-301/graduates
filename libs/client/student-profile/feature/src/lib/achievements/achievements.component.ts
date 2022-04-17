/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.sass']
})
export class AchievementsComponent implements OnInit {

  constructor() { 
    this.achievements = null;
  }

  @Input() achievements: any;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

}
