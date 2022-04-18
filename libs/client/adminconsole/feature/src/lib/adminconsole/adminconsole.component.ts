import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  // IDDoc : any
  // CVDoc : any
  stagedAddRoles : string[]
  stagedRemoveRoles : string[]
  currentStory : any
  currentBlog : any

  constructor() {
    //Populate the sidenav with these options
    this.sidenavOptions = ["Create User", "Users", "Story", "Roles", "Blogs", "Shorts"]

    //Set default option
    this.shorts = []
    this.blogs = []
    this.stories = []
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
    return
    //getUsers
    //   fetch('http://localhost:3333/graphql', {
    //   method: 'POST',
    //   headers: {'Content-Type' : 'application/json'},
    //   body: JSON.stringify({ query: `
    //     query {
    //       adminconsole {
    //         id
    //         email
    //         suspended
    //         name
    //       }
    //     }`
    //   }),
    // })
    // .then(res => 
    //   res.json().then( ress => this.users = ress.data.adminconsole)
    // );

    // //getBlogs
    // this.users.forEach((u)  =>  {
    //   fetch('http://localhost:3333/graphql', {
    //   method: 'POST',
    //   headers: {'Content-Type' : 'application/json'},
    //   body: JSON.stringify({ query: `
    //     query {
    //       getBlogs {
    //         //blogName
    //         //userName
    //       }
    //     }`
    //   }),
    // })
    // .then(res => 
    //   res.json().then( ress => this.blogs.push(ress.data.adminconsole))
    // );
    // })
    
    // //getStories
    // this.users.forEach((u)  =>  {
    //   fetch('http://localhost:3333/graphql', {
    //     method: 'POST',
    //     headers: {'Content-Type' : 'application/json'},
    //     body: JSON.stringify({ query: `
    //       query {
    //         getStories {
    //           //blogName
    //           //userName
    //         }
    //       }`
    //     }),
    //   })
    //   .then(res => 
    //     res.json().then( ress => this.stories.push(ress.data.adminconsole))
    //   );
    // })

    // //getShorts
    // this.users.forEach((u)  =>  {
    //   fetch('http://localhost:3333/graphql', {
    //     method: 'POST',
    //     headers: {'Content-Type' : 'application/json'},
    //     body: JSON.stringify({ query: `
    //       query {
    //         getShorts {
    //           //blogName
    //           //userName
    //         }
    //       }`
    //     }),
    //   })
    //   .then(res => 
    //     res.json().then( ress => this.shorts.push(ress.data.adminconsole))
    //   );
    // })
}
 
  fetchData() : void {
    this.users = [{"name" : "John", "suspended" : true, "roles" : ["Role 1", "Role 2"], "permissions" : ["Permission 1", "Permission 2"]}, 
    {"name" : "John", "suspended" : true, "roles" : ["Role 1", "Role 2"], "permissions" : ["Permission 1", "Permission 2"]},
    {"name" : "John", "suspended" : true, "roles" : ["Role 1", "Role 2"], "permissions" : ["Permission 1", "Permission 2"]},
    {"name" : "John", "suspended" : true, "roles" : ["Role 1", "Role 2"], "permissions" : ["Permission 1", "Permission 2"]},
    {"name" : "John", "suspended" : true, "roles" : ["Role 1", "Role 2"], "permissions" : ["Permission 1", "Permission 2"]},
    {"name" : "John", "suspended" : true, "roles" : ["Role 1", "Role 2"], "permissions" : ["Permission 1", "Permission 2"]},
    {"name" : "John", "suspended" : true, "roles" : ["Role 1", "Role 2"], "permissions" : ["Permission 1", "Permission 2"]},
    {"name" : "John", "suspended" : true, "roles" : ["Role 1", "Role 2"], "permissions" : ["Permission 1", "Permission 2"]},
    {"name" : "John", "suspended" : true, "roles" : ["Role 1", "Role 2"], "permissions" : ["Permission 1", "Permission 2"]}]
    this.currentUser = this.users[0]

    this.stories = [{"name" : "Story 1", "archived" : true},
    {"name" : "Story 1", "archived" : true},
    {"name" : "Story 1", "archived" : true},
    {"name" : "Story 1", "archived" : true},
    {"name" : "Story 1", "archived" : true}]

    this.blogs = [{"name" : "Blog 1", "archived" : true},
    {"name" : "Blog 1", "archived" : true},
    {"name" : "Blog 1", "archived" : true},
    {"name" : "Blog 1", "archived" : true},
    {"name" : "Blog 1", "archived" : true}]
    
    this.currentBlog = this.blogs[0]
    this.currentStory = this.stories[0]
    this.allPermissions = ["Permission 1", "Permission 2", "Permission 3", "Permission 4"]
    this.allRoles = ["Role 1", "Role 2", "Role 3", "Role 4", "Role 5"]
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
    if(this.currentUser.roles.indexOf(role) != -1)
      return
    this.currentUser.roles.push(role)
    this.stagedAddRoles.push(role)
  }

  removeRole(role : string) {
    //Remove user's role
    let ind = this.currentUser.roles.indexOf(role)
    this.currentUser.roles.splice(ind,1)
    ind = this.stagedRemoveRoles.push(role)
  }

  addPermission(p : string) {
    if(this.currentUser.permissions.indexOf(p) != -1)
      return
    this.currentUser.permissions.push(p)
    // this.stagedAddRoles.push(role)
  }

  removePermission(p : string) {
    const ind = this.currentUser.permissions.indexOf(p)
    this.currentUser.permissions.splice(ind,1)
    // ind = this.stagedRemoveRoles.push(role)

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

  archiveStory() {
    this.currentStory.archived = true
  }

  unarchiveStory() {
    this.currentStory.archived = false
  }

  selectStory(u : any) {
    this.currentStory = u
  }

  selectBlog(u : any) {
    this.currentBlog = u
  }

  archiveBlog() {
    this.currentBlog.archived = true
  }

  unarchiveBlog() {
    this.currentBlog.archived = false
  }

  archive() {
    this.currentUser.archived = true
  }
  unarchive() {
    this.currentUser.archived = false
  }

  suspend() {
    this.currentUser.suspended = true
  }

  unsuspend() {
    this.currentUser.suspended = false
  }

  trackItem(index:number) {
    return index
  }
}
