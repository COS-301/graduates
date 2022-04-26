import { Component } from '@angular/core';
import { RequestTabApi } from './requests-tab.api';

@Component({
  selector: 'graduates-requests-tab',
  templateUrl: './requests-tab.component.html',
  styleUrls: ['./requests-tab.component.scss']
})
export class RequestsTabComponent {
  constructor(private notifApi : RequestTabApi) {
    //do something
  }

  requestAll() {
    this.requestCV();
    this.requestAR();
    this.requestCD();
  }

  requestCV() {
    let idFrom = "";
    let nameTo = "";
    let emailTo = "";
    this.notifApi.requestCV().subscribe({
      next: (res) => {
        idFrom = res.data.createRequestNotification.userIdTo;
        this.notifApi.getUserEmailAndName(idFrom).subscribe({
          next: (result) => {
            nameTo = result.data.notificationsGetUser.name;
            emailTo = result.data.notificationsGetUser.email;
            const emailFrom = "lastrucci61@gmail.com";
            const emailSubject = "Request for CV";
            const emailText = "Good afternoon "+ nameTo+". You're CV has been requested!";
            this.notifApi.sendMailNotification(emailFrom, emailTo, emailSubject, emailText).subscribe({
              next: (result) => {
                console.log("Mail sent!");
              }
            });
          }
        });
      }
    });
    
    alert("CV requested");
  }

  requestAR() {
    let idFrom = "";
    let nameTo = "";
    let emailTo = "";
    this.notifApi.requestAR().subscribe({
      next: (res) => {
        idFrom = res.data.createRequestNotification.userIdTo;
        this.notifApi.getUserEmailAndName(idFrom).subscribe({
          next: (result) => {
            nameTo = result.data.notificationsGetUser.name;
            emailTo = result.data.notificationsGetUser.email;
            const emailFrom = "lastrucci61@gmail.com";
            const emailSubject = "Request for Academic Record";
            const emailText = "Good afternoon "+ nameTo+". You're Academic Record has been requested!";
            this.notifApi.sendMailNotification(emailFrom, emailTo, emailSubject, emailText).subscribe({
              next: (result) => {
                console.log("Mail sent!");
              }
            });
          }
        });
      }
    });
    alert("Academic record requested");
  }
  requestCD() {
    let idFrom = "";
    let nameTo = "";
    let emailTo = "";
    this.notifApi.requestCD().subscribe({
      next: (res) => {
        idFrom = res.data.createRequestNotification.userIdTo;
        this.notifApi.getUserEmailAndName(idFrom).subscribe({
          next: (result) => {
            nameTo = result.data.notificationsGetUser.name;
            emailTo = result.data.notificationsGetUser.email;
            const emailFrom = "lastrucci61@gmail.com";
            const emailSubject = "Request for Contact Details";
            const emailText = "Good afternoon "+ nameTo+". You're Contact Details has been requested!";
            this.notifApi.sendMailNotification(emailFrom, emailTo, emailSubject, emailText).subscribe({
              next: (result) => {
                console.log("Mail sent!");
              }
            });
          }
        });
      }
    });
    alert("Contact details requested");
  }
}
