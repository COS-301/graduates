import { Component } from '@angular/core';

@Component({
  selector: 'graduates-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  facebook: string | undefined = "https://www.facebook.com";
  gitLab: string | undefined = ""
  twitter: string | undefined = "";
  gitHub: string | undefined = "https://github.com/";
  youtube: string | undefined = "https://www.youtube.com/";
  discord: string | undefined = "https://www.discord.com";
  linkedIn: string | undefined = "https://www.linkedin.com/";
  tiktok: string | undefined = "";
  instagram: string | undefined = "https://www.instagram.com";
  constructor() {
    //do something
  }
}
