/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
    facebook = "facebook";
    gitLab = ""
    twitter = "";
    gitHub = "https://github.com/";
    youtube = "https://www.youtube.com/";
    discord = "discord";
    linkedIn = "";
    tiktok = "tiktok";
    instagram = "insta";
    
   // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { 
    // this.name = null;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  // @Input() name: any;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

 

}