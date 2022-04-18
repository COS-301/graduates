import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'graduates-blog-explore',
  templateUrl: './blog-explore.component.html',
  styleUrls: ['./blog-explore.component.scss'],
  providers: [Apollo],
})
export class BlogExploreComponent implements OnInit {
  loggedInUser = 'cl24npfsm0019wwuuey6gdhfp';
  @Input() admin: boolean;

  newestFirstSort: boolean;
  cols: number | undefined;
  arrayForSort: any;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 2,
    sm: 1,
    xs: 1,
  };

  blogList = [
    {
      id: 'nothing',
      title: 'No Available Blogs',
      userId: 'No User',
      content: 'Empty',
    },
  ];
  blogs = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return this.blogList;
    })
  );

  constructor(
    private apollo: Apollo,
    private breakpointObserver: BreakpointObserver,
    private location: Location
  ) {
    this.admin = false;
    this.newestFirstSort = true;
    this.loadGrid();
  }

  //Creates grid for cards to load into (Resizes to Screen)
  loadGrid() {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
          }
        }
      });
  }

  ngOnInit(): void {
    this.loadBlogs();
  }

  // Blog interation buttons
  createBlog() {
    window.open("/blog/create", "_self");
  }

  readBlog(blogID: string) {
    window.open(("/blog/view/" + blogID), "_self");
  }

  editBlog(blogID: unknown) {
    window.open(("/blog/edit/" + blogID), "_self");
  }

  deleteBlog(blogID: string) {
    if (!(this.apollo.client === undefined)) {
      this.apollo
        .mutate({
          mutation: gql`
          mutation {
            deleteCommentsByBlogId(blogId: "${blogID}") 
          }
        `,
        })
        .subscribe((result) => {
          console.log(result);
        });
    }

    if (!(this.apollo.client === undefined)) {
      this.apollo
        .mutate({
          mutation: gql`
          mutation {
            deleteBlog(blogId: "${blogID}") 
          }
        `,
        })
        .subscribe((result) => {
          console.log(result);
        });
    }
    window.location.reload();
  }

  //Sorting for blogs
  newestFirst() {
    if (!this.newestFirstSort) {
      this.arrayForSort = [...this.blogList];
      this.arrayForSort.reverse();
      this.blogList = this.arrayForSort;
      this.newestFirstSort = true;
      this.blogs = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(() => {
          return this.blogList;
        })
      );
    }
  }

  oldestFirst() {
    if (this.newestFirstSort) {
      this.arrayForSort = [...this.blogList];
      this.arrayForSort.reverse();
      this.blogList = this.arrayForSort;
      this.newestFirstSort = false;
      this.blogs = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(() => {
          return this.blogList;
        })
      );
    }
  }

  // Allow user to access admin settings
  changeAdmin() {
    if (this.admin) {
      this.admin = false;
    } else {
      this.admin = true;
    }
    this.loadBlogs();
    this.loadGrid();
  }

  //Add to blogs array
  loadBlogs() {
    if (this.admin) {
      if (!(this.apollo.client === undefined)) {
        this.apollo
          .watchQuery({
            query: gql`
              query {
                blogByUserId(userId: "${this.loggedInUser}") {
                  id
                  title
                  content
                  userId
                }
              }
            `,
          })
          .valueChanges.subscribe((results: any) => {
            this.blogList = results.data.blogByUserId;
            this.blogs = this.breakpointObserver
              .observe(Breakpoints.Handset)
              .pipe(
                map(() => {
                  const out = [];
                  for (let index = 0; index < 15; index++) {
                    if (index < this.blogList.length)
                      out.push(this.blogList[index]);
                  }
                  return out;
                })
              );
          });
      }
    } else {
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
                }
              }
            `,
          })
          .valueChanges.subscribe((results: any) => {
            this.blogList = results.data.allBlogs;
            this.blogs = this.breakpointObserver
              .observe(Breakpoints.Handset)
              .pipe(
                map(() => {
                  const out = [];
                  for (let index = 0; index < 15; index++) {
                    if (index < this.blogList.length)
                      out.push(this.blogList[index]);
                  }
                  return out;
                })
              );
          });
      }
    }
  }
}