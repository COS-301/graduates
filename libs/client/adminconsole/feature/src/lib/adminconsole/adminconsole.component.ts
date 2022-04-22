import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apollo, gql } from 'apollo-angular';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'cards-adminconsole',
  templateUrl: './adminconsole.component.html',
  styleUrls: ['./adminconsole.component.scss'],
  providers: [Apollo]
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
  archivedBlogs : any[]
  currentShort : any
  constructor(
    private apollo: Apollo,
    private breakpointObserver: BreakpointObserver,
  ) {
    //Populate the sidenav with these options
    this.sidenavOptions = ["Create User", "Users", "Roles", "Blogs", "Shorts"]

    //Set default option
    this.archivedBlogs = []
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
    // return
    // getUsers
    // 
    if (!(this.apollo.client === undefined)) {
      this.apollo
        .watchQuery({
          query: gql`
            query {
              allBlogs {
                id
                title
                content
                userId
                archived
              }
            }
          `,
        })
        .valueChanges.subscribe((results: any) => {
          this.blogs = results.data.allBlogs
          console.log(this.blogs)
        });

        if (!(this.apollo.client === undefined)) {
          this.apollo
            .watchQuery({
              query: gql`
                query {
                  allArchivedBlogs {
                    id
                    title
                    content
                    userId
                    archived
                  }
                }
              `,
            })
            .valueChanges.subscribe((results: any) => {
              this.archivedBlogs = results.data.allBlogs
        });
      }

      if (!(this.apollo.client === undefined)) {
        this.apollo
          .watchQuery({
            query: gql`
            query{ getAllShorts{ archived, user{  name  },shortTag{ tag },userId,id, thumbnail}}
            `,
          })
          .valueChanges.subscribe((results: any) => {
            console.log(results.data.getAllShorts)
            this.shorts = results.data.getAllShorts
          });
      }

      if (!(this.apollo.client === undefined)) {
        this.apollo
          .watchQuery({
            query: gql`
            query{ 
              findAll{
                id
                name
                email
                password
              }
            }
            `,
          })
          .valueChanges.subscribe((results: any) => {
            console.log(results.data)
          });
      }


    this.currentBlog = this.blogs[0]
    this.currentShort = this.shorts[0]
    this.currentUser = this.users[0]
  }}
 
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

    // this.stories = [{"name" : "Story 1", "archived" : true},
    // {"name" : "Story 1", "archived" : true},
    // {"name" : "Story 1", "archived" : true},
    // {"name" : "Story 1", "archived" : true},
    // {"name" : "Story 1", "archived" : true}]

    // this.blogs = [{"name" : "Blog 1", "archived" : true},
    // {"name" : "Blog 1", "archived" : true},
    // {"name" : "Blog 1", "archived" : true},
    // {"name" : "Blog 1", "archived" : true},
    // {"name" : "Blog 1", "archived" : true}]
    
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
    if (!(this.apollo.client === undefined)) {
    this.apollo
      .mutate({
        mutation: gql`
        mutation {
          updateBlogArchived(blogId: "${this.currentBlog.id}", archived : true){

          }
        }
      `,
    })
    .subscribe((result) => {
      console.log(result);
    });
    // window.location.reload();
  }
}

  unarchiveBlog() {
    if (!(this.apollo.client === undefined)) {
      this.apollo
        .mutate({
          mutation: gql`
          mutation {
            updateBlogArchived(blogId: "${this.currentBlog.id}", archived : false)
          }
        `,
      })
      .subscribe((result) => {
        console.log(result);
      });
    }
    // window.location.reload();
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
