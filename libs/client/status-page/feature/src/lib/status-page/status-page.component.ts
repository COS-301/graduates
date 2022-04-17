import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

const GET_STATUS = gql`
  query {
    hosting {
      name
      status
    }
  }
`;

@Component({
  selector: 'graduates-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss'],
})
export class StatusPageComponent implements OnInit {
  operationalImage =
    'https://icon-library.com/images/tick-icon-png/tick-icon-png-17.jpg';
  nonOperationalImage =
    'https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-4.jpg';
  underDevelopmentImage =
    'https://icon-library.com/images/warning-icon-svg/warning-icon-svg-18.jpg';

  querySubscription: Subscription = new Subscription();
  statusData = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_STATUS,
      })
      .valueChanges.subscribe(({ data }) => {
        this.statusData = data.hosting;
        console.log(this.statusData);
      });
  }
}
