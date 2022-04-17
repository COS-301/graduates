import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'graduates-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  providers: [Apollo],
})
export class BlogViewComponent implements OnInit {
  blogId: string | undefined;
  loggedInUser = 'cl22973yc0037zsuu4yz7ah5g';
  date!: Date;
  blog = {
    title: 'string',
    content: 'string',
    userId: 'string',
    date: new Date(),
  };

  constructor(private apollo: Apollo, private activeRoute: ActivatedRoute) {
    //Code
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.blogId = params['blogID'];
    });
    this.displayBlog(this.blogId);
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
                userId
                date
              }
            }
            `,
          })
          .valueChanges.subscribe((results: any) => {
            console.log(results.data.blogById);
            console.log(this.blog);
            this.blog = results.data.blogById;
            this.date = new Date(this.blog.date);
            console.log(this.date);
          });
      }
    }
  }

  return() {
    window.open('/blog', '_self');
  }
}
