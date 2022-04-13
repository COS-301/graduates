import { Component } from '@angular/core';

@Component({
  selector: 'cards-adminconsole',
  templateUrl: './adminconsole.component.html',
  styleUrls: ['./adminconsole.component.scss']
})
export class AdminconsoleComponent {


  burger : boolean
  sidenavOptions : string[] 
  option : string
  users : any[]
  currentUser : any
  allRoles : any[]
  shortsOption = "Permission"
  usersPORS = "Permission"
  allPermissions: any[]
  constructor() {
    //Populate the sidenav with these options
    this.sidenavOptions = ["Create User", "Users", "Story", "Roles", "Blogs", "Shorts"]

    //Set default option
    this.burger = false
    this.option = this.sidenavOptions[0]
    this.users = []
    this.allRoles = []
    this.allPermissions = []
    this.fetchData()
  }
 
  fetchData() {
    switch(this.option) {
      case "Blogs" :
        this.users = [{"name" : "Jack", "archived" : true},  {"name" : "Angela", "archived" : false}, {"name" : "Marceline", "archived" : true},{"name" : "Jonathan", "archived" : false}]
        break
      case "Users" :
        this.users = [{"name" : "Jack", "roles" : ["A", "B"], "permissions" : ["Permission A", "Permission B"]}, {"name" : "Angela", "roles" : ["A", "D"], "permissions" : ["Permission A", "Permission B"]}, {"name" : "Marceline", "roles" : ["A","B", "C"], "permissions" : ["Permission A", "Permission B"]},{"name" : "Jonathan", "roles" : ["D"], "permissions" : ["Permission A", "Permission B"]}]
        this.currentUser = this.users[0]
        break
      case "Roles" :
        this.users = [{"name" : "Jack", "roles" : ["A", "B"]}, {"name" : "Angela", "roles" : ["A", "D"]}, {"name" : "Marceline", "roles" : ["A","B", "C"]},{"name" : "Jonathan", "roles" : ["D"]}]
        this.currentUser = this.users[0]
        break
    }
    this.currentUser = this.users[0]

    this.allPermissions = ["Permission 1", "Permission 2", "Permission 3", "Permission 4"]
    this.allRoles = ["Role 1", "Role 2", "Role 3", "Role 4", "Role 5"]
  }

  sidenavOption(option : string) {
    this.option = option

    //Fetch users for blogs
    this.fetchData()
  }

  selectUser(u : any) {
    this.currentUser = u
  }

  removeRole(role : string) {
    //Remove user's role

  }

  addRole(role:  string){
    //add role to user

  }
  
  changeShortsOption(opt : string) {
    this.shortsOption = opt
  }

  setPORS(opt : string) {
    this.usersPORS = opt
  }

}
