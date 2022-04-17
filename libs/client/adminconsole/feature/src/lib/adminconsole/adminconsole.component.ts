import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'cards-adminconsole',
  templateUrl: './adminconsole.component.html',
  styleUrls: ['./adminconsole.component.scss']
})
export class AdminconsoleComponent{

  burger : boolean
  sidenavOptions : string[] 
  option : string
  users : any[]
  stories : any[]
  shorts : any[]
  currentUser : any
  allRoles : any[]
  shortsOption = "Permission"
  usersPORS = "Permission"
  allPermissions: any[]
  blogs : any[]
  userName : string
  userSurname : string
  userEmail : string
  userNumber : string
  userAddress : string
  userIDDoc : any
  userCVDoc : any
  stagedAddRoles : string[]
  stagedRemoveRoles : string[]


  constructor(private http : HttpClient, ) {
    //Populate the sidenav with these options
    this.sidenavOptions = ["Create User", "Users", "Story", "Roles", "Blogs", "Shorts"]

    //Set default option
    this.stagedAddRoles = []
    this.stagedRemoveRoles = []
    this.userName = "Name"
    this.userSurname = "Surname"
    this.userEmail = "Email"
    this.userNumber = "Contact Details"
    this.userAddress = "Address"
    this.burger = false
    this.option = this.sidenavOptions[0]
    this.users = []
    this.shorts = []
    this.blogs = []
    this.stories = []
    this.allRoles = []
    this.allPermissions = []
    this.fetchData()
  }

  ngOnInit(): void {
    
    //getUsers
      fetch('http://localhost:3333/graphql', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ query: `
        query {
          adminconsole {
            id
            email
            suspended
            name
          }
        }`
      }),
    })
    .then(res => 
      res.json().then( ress => this.users = ress.data.adminconsole)
    );

    //getBlogs
    this.users.forEach((u)  =>  {
      fetch('http://localhost:3333/graphql', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ query: `
        query {
          getBlogs {
            //blogName
            //userName
          }
        }`
      }),
    })
    .then(res => 
      res.json().then( ress => this.blogs.push(ress.data.adminconsole))
    );
    })
    
    //getStories
    this.users.forEach((u)  =>  {
      fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ query: `
          query {
            getStories {
              //blogName
              //userName
            }
          }`
        }),
      })
      .then(res => 
        res.json().then( ress => this.stories.push(ress.data.adminconsole))
      );
    })

    //getShorts
    this.users.forEach((u)  =>  {
      fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ query: `
          query {
            getShorts {
              //blogName
              //userName
            }
          }`
        }),
      })
      .then(res => 
        res.json().then( ress => this.shorts.push(ress.data.adminconsole))
      );
    })
}
 
  fetchData() {
    // switch(this.option) {
    //   case "Blogs" :
    //     this.users = [{"name" : "Jack", "archived" : true},  {"name" : "Angela", "archived" : false}, {"name" : "Marceline", "archived" : true},{"name" : "Jonathan", "archived" : false}]
    //     break
    //   case "Users" :
    //     this.users = [{"name" : "Jack", "roles" : ["A", "B"], "permissions" : ["Permission A", "Permission B"]}, {"name" : "Angela", "roles" : ["A", "D"], "permissions" : ["Permission A", "Permission B"]}, {"name" : "Marceline", "roles" : ["A","B", "C"], "permissions" : ["Permission A", "Permission B"]},{"name" : "Jonathan", "roles" : ["D"], "permissions" : ["Permission A", "Permission B"]}]
    //     this.currentUser = this.users[0]
    //     break
    //   case "Roles" :
    //     this.users = [{"name" : "Jack", "roles" : ["A", "B"]}, {"name" : "Angela", "roles" : ["A", "D"]}, {"name" : "Marceline", "roles" : ["A","B", "C"]},{"name" : "Jonathan", "roles" : ["D"]}]
    //     this.currentUser = this.users[0]
    //     break
    // }
    // this.currentUser = this.users[0]

    // this.allPermissions = ["Permission 1", "Permission 2", "Permission 3", "Permission 4"]
    // this.allRoles = ["Role 1", "Role 2", "Role 3", "Role 4", "Role 5"]
  }

  sidenavOption(option : string) {
    this.option = option
  }

  selectUser(u : any) {
    this.currentUser = u
  }

  createUser() : void {
    const user = {"name" : this.userName,
            "surname" : this.userSurname,
            "contactDetails" : this.userNumber,
            "email" : this.userEmail}
            // "CVDOC? IDDOC?" }
    fetch('http://localhost:3333/graphql', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ query: `
        query {
          createUser(${user}) {
            //blogName
            //userName
          }
        }`
      }),
    })
  }

  addRole(role:  string){
    //add role to user object
    this.currentUser.roles.push(role)
    this.stagedAddRoles.push(role)
  }

  removeRole(role : string) {
    //Remove user's role
    let ind = this.currentUser.roles.indexOf(role)
    this.currentUser.roles.splice(ind,1)
    ind = this.stagedRemoveRoles.push(role)
  }

  changeRoles() : void {
    this.stagedRemoveRoles.forEach((rR) =>  {
      this.stagedAddRoles.forEach((aR)  =>  {
        if(rR == aR)
        {
          const rRIndex = this.stagedRemoveRoles.indexOf(rR)
          const aRIndex = this.stagedAddRoles.indexOf(aR)
          this.stagedRemoveRoles.splice(rRIndex,1)
          this.stagedAddRoles.splice(aRIndex,1)
        }
      })
    })
    this.stagedAddRoles.forEach((r) =>  {
      fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ query: `
          query {
            addRole(${this.currentUser}, ${r}) {
            }
          }`
        }),
      })
    })

    this.stagedRemoveRoles.forEach((r) =>  {
      fetch('http://localhost:3333/graphql', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ query: `
          query {
            removeRole(${this.currentUser}, ${r}) {
            }
          }`
        }),
      })
    })

  }
  changeShortsOption(opt : string) {
    this.shortsOption = opt
  }

  setPORS(opt : string) {
    this.usersPORS = opt
  }

  archive() {

  }
  unarchive() {

  }

}
