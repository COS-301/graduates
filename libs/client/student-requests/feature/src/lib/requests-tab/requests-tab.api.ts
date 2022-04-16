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
                userIDTo: "cl20wx4ka0061boun3qhcpkzq",
                userIDFrom: "cl20wxms80114bounbcjvfui4",
                notificationType: "CV"
            ) {
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
                userIDTo: "cl20wx4ka0061boun3qhcpkzq",
                userIDFrom: "cl20wxms80114bounbcjvfui4",
                notificationType: "Contact Details"
            ) {
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
                userIDTo: "cl20wx4ka0061boun3qhcpkzq",
                userIDFrom: "cl20wxms80114bounbcjvfui4",
                notificationType: "Academic Record"
            ) {
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
}