import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class RequestTabApi {
    constructor(private httpClient: HttpClient) {}

    requestCV():Observable<any | null> {
        const query = `mutation { 
            createRequestNotification (
                userIdTo: "cl20wx4ka0061boun3qhcpkzq",
                userIdFrom: "cl2374vfa0253i8unx7r7eeb5",
                notificationType: "CV"
            ) {
                userIdTo
            data {
                notificationType
            }
            }
        }`
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }

        return this.httpClient.post<any>('http://localhost:3333/graphql', JSON.stringify({ query: query}), options);
    }

    requestCD():Observable<any | null> {
        const query = `mutation { 
            createRequestNotification (
                userIdTo: "cl20wx4ka0061boun3qhcpkzq",
                userIdFrom: "cl20wxms80114bounbcjvfui4",
                notificationType: "Contact Details"
            ) {
                userIdTo
            data {
                notificationType
            }
            }
        }`
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        
        return this.httpClient.post<any>('http://localhost:3333/graphql', JSON.stringify({ query: query}), options);
    }

    requestAR():Observable<any | null> {
        const query = `mutation { 
            createRequestNotification (
                userIdTo: "cl20wx4ka0061boun3qhcpkzq",
                userIdFrom: "cl2378g130404i8unncj003ay",
                notificationType: "Academic Record"
            ) {
            userIdTo
            data {
                notificationType
            }
            }
        }`
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }

        return this.httpClient.post<any>('http://localhost:3333/graphql', JSON.stringify({ query: query}), options);
    }

    sendMailNotification(emailFrom : string, emailTo : string, emailSubject : string, emailText : string): Observable<any | null> {
        const query = `mutation {
            sendEmailForNotification(emailFrom: "${emailFrom}",emailTo: "${emailTo}",emailHeading: "${emailSubject}",emailText: "${emailText}") {
                emailTo
                emailFrom
                emailSubject
                emailText
            }
        }`
        const options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
        }

        return this.httpClient.post<any>('http://localhost:3333/graphql', JSON.stringify({ query: query}), options);
    }

    getUserEmailAndName(userId : string): Observable<any | null> {
        const query = `query {
            notificationsGetUser(userId: "${userId}") {
              name
              email
            }
          }`
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }

        return this.httpClient.post<any>('http://localhost:3333/graphql', JSON.stringify({ query: query}), options);
    }
}