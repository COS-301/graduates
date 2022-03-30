import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graduates-shell-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent{

  sidenavOptions : string[] 
  option : string
  users : any[]
  currentUser : any
  allRoles : string[]
  constructor() {
    //Populate the sidenav with these options
    this.sidenavOptions = ["Users", "Create User", "Users", "Story", "Roles", "Blogs", "Shorts"]

    //Set default option
    this.option = this.sidenavOptions[0]
    this.users = []
    this.allRoles = []
    this.fetchData()
  }
 
  fetchData() {
    switch(this.option) {
      case "Blogs" :
        this.users = [{"name" : "Jack", "archived" : true},  {"name" : "Angela", "archived" : false}, {"name" : "Marceline", "archived" : true},{"name" : "Jonathan", "archived" : false}]
        break
      case "Users" :
        this.users = [{"name" : "Jack", "archived" : true},  {"name" : "Angela", "archived" : false}, {"name" : "Marceline", "archived" : true},{"name" : "Jonathan", "archived" : false}]
        break
      case "Roles" :
        this.users = [{"name" : "Jack", "roles" : ["A", "B"]}, {"name" : "Angela", "roles" : ["A", "D"]}, {"name" : "Marceline", "roles" : ["A","B", "C"]},{"name" : "Jonathan", "roles" : ["D"]}]
        this.currentUser = this.users[0]
        break
    }
    
    this.allRoles = ["Role 1", "Role 2", "Role 3", "Role 4", "Role 5"]
  }

  sidenavOption(option : string) {
    this.option = option

    //Fetch users for blogs
    this.fetchData()
  }

  removeRole(role : string) {
    //Remove user's role

  }

  addRole(role:  string){
    //add role to user

  }
}
