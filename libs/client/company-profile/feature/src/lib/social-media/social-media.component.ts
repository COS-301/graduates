import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngxs/store';
import { CompanyProfileService } from '../services/company-profile.service';

@Component({
  selector: 'graduates-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  facebook: string | undefined = "";
  gitLab: string | undefined = ""
  twitter: string | undefined = "";
  gitHub: string | undefined = "";
  youtube: string | undefined = "";
  discord: string | undefined = "";
  linkedIn: string | undefined = "";
  tiktok: string | undefined = "";
  instagram: string | undefined = "";

  socials:UserSocialMedia[] = [];
  
  constructor(private apiService: CompanyProfileService) {
    
  }

  ngOnInit(): void {
    //make API call to access status of resources for particular company
    this.apiService.getSocials().subscribe({
      next: (_res) => {
        this.socials = _res.data.getCompanySocialMedia;

        for(let i = 0; i<this.socials.length;i++){
          switch(this.socials[i].type){
            case "FACEBOOK":
              this.facebook = this.socials[i].link;
              break;
            case "GITLAB":
              this.gitLab = this.socials[i].link;
              break;
            case "TWITTER":
              this.twitter = this.socials[i].link;
              break;
            case "GITHUB":
              this.gitHub = this.socials[i].link;
              break;
            case "YOUTUBE":
              this.youtube = this.socials[i].link;
              break;
            case "DISCORD":
              this.discord = this.socials[i].link;
              break;
            case "LINKEDIN":
              this.linkedIn = this.socials[i].link;
              break;
            case "TIKTOK":
              this.tiktok = this.socials[i].link;
              break;
            case "INSTAGRAM":
              this.instagram = this.socials[i].link;
              break;
          }
        }
      },
      error: (err) => { console.log(err); }
    });
  }
}

interface UserSocialMedia{
    userId: string;
    type: string;
    link: string;
}
