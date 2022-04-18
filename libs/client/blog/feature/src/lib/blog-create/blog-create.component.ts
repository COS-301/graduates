//Status: Small Error
import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'graduates-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss'],
  providers: [Apollo],
})
export class BlogCreateComponent {
  // Variable declarations
  title!: string;
  content!: string;
  loggedInUser: string;

  constructor(private apollo: Apollo) {
    // Mimic user logged in
    this.loggedInUser = 'cl24npfsm0019wwuuey6gdhfp';
  }

  // Return to blog-explore without creating a blog
  cancel() {
    window.open('/blog', '_self');
  }

  // Create a new blog, add blog to database and return to blog-explore
  post() {
    console.log(this.content);
    //Fix NewLine Error ERROR GraphQLError: Syntax Error: Unterminated string.
    console.log(this.content);
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
