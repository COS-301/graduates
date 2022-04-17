import {Component} from '@angular/core';
// import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'graduates-social-media-edit',
  templateUrl: './social-media-edit.component.html',
  styleUrls: ['./social-media-edit.component.scss'],
})
export class SocialMediaEditComponent {
  facebook: string | undefined = "facebook";
  gitLab: string | undefined = ""
  twitter: string | undefined = "";
  gitHub: string | undefined = "https://github.com/";
  youtube: string | undefined = "https://www.youtube.com/";
  discord: string | undefined = "discord";
  linkedIn: string | undefined = "";
  tiktok: string | undefined = "tiktok";
  instagram: string | undefined = "insta";
  constructor() {
    //do something
  }
  save () : void {
    this.facebook = document.getElementById("facebook")?.innerHTML;
    this.gitLab = document.getElementById("gitLab")?.innerHTML;
    this.twitter = document.getElementById("twitter")?.innerHTML;
    this.gitHub = document.getElementById("gitHub")?.innerHTML;
    this.youtube = document.getElementById("youtube")?.innerHTML;
    this.discord = document.getElementById("discord")?.innerHTML;
    this.linkedIn = document.getElementById("linkedIn")?.innerHTML;
    this.tiktok = document.getElementById("tiktok")?.innerHTML;
    this.instagram = document.getElementById("instagram")?.innerHTML;
  }
}
