import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'graduates-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  providers: [Apollo],
})
export class BlogViewComponent implements OnInit {
  blogId: string | undefined;
  loggedInUser = 'cl24npfsm0019wwuuey6gdhfp';
  date!: Date;
  comment!: string;

  blog = {
    title: 'string',
    content: 'string',
    userId: 'string',
    date: new Date(),
  };

  commentList = [
    {
      id: 'nothing',
      blogId: 'No blog',
      userId: 'No User',
      content: 'Empty',
      date: new Date(),
    },
  ];

  constructor(private apollo: Apollo, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.blogId = params['blogID'];
    });
    this.displayBlog(this.blogId);
    this.diplayComments();
  }

  // Display current blog
  displayBlog(blogID: string | undefined) {
    if (blogID === undefined) {
      alert('No blog ID');
      window.open('/blog', '_self');
    } else {
      if (!(this.apollo.client === undefined)) {
        this.apollo
          .watchQuery({
            query: gql`
            query {
              blogById(blogId: "${this.blogId}") {
                title
                content
                userId
                date
              }
            }
            `,
          })
          .valueChanges.subscribe((results: any) => {
            this.blog = results.data.blogById;
            this.date = new Date(this.blog.date);
          });
      }
    }
  }

  // Display all comments
  diplayComments() {
    if (!(this.apollo.client === undefined)) {
      this.apollo
        .watchQuery({
          query: gql`
            query {
              commentsByBlogId(blogId: "${this.blogId}") {
                id
                blogId
                userId
                content
                date
              }
            }
          `,
        })
        .valueChanges.subscribe((results: any) => {
          this.commentList = results.data.commentsByBlogId;
        });
    }
  }

  // Go back to clog-explore
  return(){
    window.open('/blog', '_self');
  }

  // Create a comment
  post() {
    console.log(this.comment);
    if (this.comment === undefined || this.comment === '') {
      alert("Invalid Inputs")
    } else {
      if (!(this.apollo.client === undefined)) {
        this.apollo
          .mutate({
            mutation: gql`
            mutation {
              createComment(blogId: "${this.blogId}", userId:"${this.loggedInUser}", content: "${this.comment}"){
                content
              }
            }
          `,
          })
          .subscribe((result) => {
            alert("SUCCESS!!");
          });
      }
      window.location.reload();
    }
  }
}