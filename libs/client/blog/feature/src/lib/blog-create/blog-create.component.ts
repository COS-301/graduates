import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'graduates-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss'],
  providers: [Apollo],
})
export class BlogCreateComponent {
  loggedInUser = 'cl22973yc0037zsuu4yz7ah5g';
  title: string | undefined;
  content: string | undefined;

  constructor(private apollo: Apollo) {
    //CODE
  }

  cancel() {
    window.open('/blog', '_self');
  }

  post() {
    console.log(this.content);
    this.content?.replace(/\r?\n|\r/g, " ");
    console.log(this.content);
    if (
      this.title === undefined ||
      this.content == undefined ||
      this.title === '' ||
      this.content === ''
    ) {
      alert("Invalid Inputs")
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
            alert("SUCCESS!!");
          });
      }
      setTimeout(() => {
        window.open('/blog', '_self');
      }, 2000);
    }
  }
}
