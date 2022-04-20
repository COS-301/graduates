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
<<<<<<< Updated upstream
=======

  ngOnInit(): void {
    return
    //getUsers
    //   fetch('https://301graduates.live:3333/graphql', {
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
    //   fetch('https://301graduates.live:3333/graphql', {
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
    //   fetch('https://301graduates.live:3333/graphql', {
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
    //   fetch('https://301graduates.live:3333/graphql', {
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
>>>>>>> Stashed changes
 
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

<<<<<<< Updated upstream
=======
  createUser() : void {
    const user = {"name" : this.userName,
            "surname" : this.userSurname,
            "contactDetails" : this.userNumber,
            "email" : this.userEmail}
            // "CVDOC? IDDOC?" }
    fetch('https://301graduates.live:3333/graphql', {
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

>>>>>>> Stashed changes
  removeRole(role : string) {
    //Remove user's role

  }

<<<<<<< Updated upstream
  addRole(role:  string){
    //add role to user
=======
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
      fetch('https://301graduates.live:3333/graphql', {
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
      fetch('https://301graduates.live:3333/graphql', {
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
>>>>>>> Stashed changes

  }
  
  changeShortsOption(opt : string) {
    this.shortsOption = opt
  }

  setPORS(opt : string) {
    this.usersPORS = opt
  }

}
