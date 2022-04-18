import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'graduates-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss'],
  providers: [Apollo],
})
export class BlogCreateComponent implements OnInit {
  // Variable declarations
  edit: boolean;
  blogId: string | undefined;
  title!: string;
  content!: string;
  loggedInUser: string;

  blog = {
    title: '',
    content: '',
  };

  constructor(private apollo: Apollo, private activeRoute: ActivatedRoute) {
    // Mimic user logged in
    this.edit = false;
    this.loggedInUser = 'cl24npfsm0019wwuuey6gdhfp';
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.blogId = params['blogID'];
    });
    if (this.blogId !== undefined) {
      this.edit = true;
      this.displayBlog(this.blogId);
    }
  }

  // Return to blog-explore without creating a blog
  cancel() {
    window.open('/blog', '_self');
  }

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
                }
              }
              `,
          })
          .valueChanges.subscribe((results: any) => {
            this.blog = results.data.blogById;
          });
      }
    }
  }

  // Create a new blog, add blog to database and return to blog-explore
  post() {
    if (this.edit) {
      if (
        this.title === '' ||
        this.content === ''
      ) {
        alert('Invalid Inputs');
      } else {
        if (this.title !== undefined) {
          if (!(this.apollo.client === undefined)) {
            this.apollo
              .mutate({
                mutation: gql`
            mutation {
              updateBlogTitle(blogId: "${this.blogId}", title: "${this.title}"){
                title
                content
              }
            }
          `,
              })
              .subscribe((result) => {
                alert('UPDATED TITLE!!');
              });
          }

          if (this.content !== undefined) {
            this.apollo
              .mutate({
                mutation: gql`
            mutation {
              updateBlogContent(blogId: "${this.blogId}", content: "${this.content}"){
                title
                content
              }
            }
          `,
              })
              .subscribe((result) => {
                alert('UPDATED CONTENT!!');
              });
          }
          setTimeout(() => {
            window.open('/blog', '_self');
          }, 2000);
        }
      }
    } else {
      if (
        this.title === undefined ||
        this.content == undefined ||
        this.title === '' ||
        this.content === ''
      ) {
        alert('Invalid Inputs');
      } else {
        if (!(this.apollo.client === undefined)) {
          this.apollo
            .mutate({
              mutation: gql`
            mutation {
              createBlog(title: "${this.title}", content:"${this.content}", archived: false, userId: "${this.loggedInUser}"){
                title
                content
              }
            }
          `,
            })
            .subscribe((result) => {
              alert('SUCCESS!!');
            });
        }
        setTimeout(() => {
          window.open('/blog', '_self');
        }, 2000);
      }
    }
  }
}
