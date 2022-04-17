import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Location } from '@angular/common';

import {Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'graduates-blog-explore',
  templateUrl: './blog-explore.component.html',
  styleUrls: ['./blog-explore.component.scss'],
  providers: [Apollo]
})
export class BlogExploreComponent implements OnInit  {
  @Input() admin : boolean;

  newestFirstSort : boolean;
  temp : any;
  cols : number | undefined;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 2,
    sm: 1,
    xs: 1
  }

  blogList = [{"blog": {"title": "Title 1", "author": "author", "content": "Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary"}},
              {"blog": {"title": "Title 2", "author": "author", "content": "Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary"}},
              {"blog": {"title": "Title 3", "author": "author", "content": "Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary"}},
              {"blog": {"title": "Title 4", "author": "author", "content": "Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary"}},
              {"blog": {"title": "Title 5", "author": "author", "content": "Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary"}},
              {"blog": {"title": "Title 6", "author": "author", "content": "Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary"}},
              {"blog": {"title": "Title 7", "author": "author", "content": "Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary"}},
              {"blog": {"title": "Title 8", "author": "author", "content": "Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary Blog Summary"}}];
  blogs = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return this.blogList;
    })
  );

  testing = "";
  constructor(private apollo: Apollo, private breakpointObserver: BreakpointObserver, private location: Location, private router: Router) {
    this.admin = false;
    this.newestFirstSort = true;
    this.loadGrid();
  }

  //Creates grid for cards to load into (Resizes to Screen)
  loadGrid(){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
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

  createBlog(){ 
    this.router.navigate(['blog/create']);
  }

  readBlog(blog: unknown){
    blog;
    this.router.navigate(['blog/view']); //Change later when ID is added to the URL
  }

  editBlog(blog: unknown){
    blog;
    this.router.navigate(['blog/create']); //Change later when ID is added to the URL
  }

  deleteBlog(blog: unknown){
    blog;
  }

  newestFirst() {
    if (!this.newestFirstSort) {
      this.blogList.reverse();
      this.newestFirstSort = true;
    }
  }

  oldestFirst() {
    if (this.newestFirstSort) {
      this.blogList.reverse();
      this.newestFirstSort = false;
    }
  }

  changeAdmin(){
    if (this.admin){
      this.admin = false;
    } else {
      this.admin = true;
    }
    this.loadGrid();
  }

  //Add to blogs array (Hopefully from API)
  loadBlogs(){
    const getAllBlogs = gql`query allBlogs{ 
      blog{
        title
        author
        content
      }
    }
    `;
    if(!(this.apollo.client===undefined)){
        this.apollo.mutate({
          mutation: gql`
          mutation { 
            testMutation(userId : "1")
            {
              any
            }
          }
          `
        }).subscribe((result:any) => {
          console.log(result);
        })
        console.log("testing");


        this.temp = this.apollo.query({query:getAllBlogs});
        this.temp.subscribe((result : any) => {
          console.log(result);
        });
        console.log(this.temp);

        this.apollo.watchQuery({query: gql`
        {
          allBlogs(){
            title
            author
            content
          }
        }
        `}).valueChanges.subscribe((results: any) => {
        
        this.testing = "here";
        this.blogs = this.breakpointObserver.observe( Breakpoints.Handset).pipe(
        
          map(() => {
    
          const out = [];
    
          for (let index = 0; index < 9; index++) {
            if(index < this.blogList.length) out.push(this.blogList[index]);
          }
          return out;
        }));
      });    
    }
  }
}