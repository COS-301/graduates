import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-shell-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent{

  sidenavOptions : string[] 
  option : string

  constructor() {
    //Populate the sidenav with these options
    this.sidenavOptions = ["Blogs", "Create User", "Users", "Story", "Roles", "Blogs", "Shorts"]

    //Set default option
    this.option = this.sidenavOptions[0]

  }
 

  sidenavOption(option : string) {
    this.option = option
  }
}
