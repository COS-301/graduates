import { Component } from '@angular/core';

@Component({
  selector: 'graduates-requests-tab',
  templateUrl: './requests-tab.component.html',
  styleUrls: ['./requests-tab.component.scss']
})
export class RequestsTabComponent {
  constructor() {
    //do something
  }

  requestAll() {
    this.requestCV();
    this.requestAR();
    this.requestCD();
  }

  requestCV() {
    fetch('http://localhost:3333/graphQL', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ query: `
      mutation {
        createRequestNotification (
                userIDTo: "cl20wx4ka0061boun3qhcpkzq",
                userIDFrom: "cl20wxms80114bounbcjvfui4",
                notificationType: "CV"
        ) {
          data {
            notificationType
          }
        }
    }`
      }),
    });
    alert("CV requested");
  }
  requestAR() {
    fetch('http://localhost:3333/graphQL', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ query: `
      mutation {
        createRequestNotification (
                userIDTo: "cl20wx4ka0061boun3qhcpkzq",
                userIDFrom: "cl20wxms80114bounbcjvfui4",
                notificationType: "Academic Record"
        ) {
          data {
            notificationType
          }
        }
    }`
      }),
    });
    alert("Academic record requested");
  }
  requestCD() {
    fetch('http://localhost:3333/graphQL', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ query: `
        mutation {
          createRequestNotification (
                  userIDTo: "cl20wx4ka0061boun3qhcpkzq",
                  userIDFrom: "cl20wxms80114bounbcjvfui4",
                  notificationType: "Contact Details"
          ) {
            data {
              notificationType
            }
          }
        }`
      }),
    });
    alert("Contact details requested");
  }
}
