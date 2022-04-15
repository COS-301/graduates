import { Component } from '@angular/core';

@Component({
  selector: 'graduates-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  facebook = "facebook";
  gitLab = ""
  twitter = "";
  gitHub = "https://github.com/";
  youtube = "https://www.youtube.com/";
  discord = "discord";
  linkedIn = "";
  tiktok = "tiktok";
  instagram = "insta";
  constructor() {
    //do something
  }
}
