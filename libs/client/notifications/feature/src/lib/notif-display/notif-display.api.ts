import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class NotificationsApi {
    constructor(private httpClient: HttpClient) {}

    getNotificationsAll():Observable<any | null> {
        const query = `query {
            notificationsAll {
                id,
                data{notificationType},
                userIdTo,
                userIdFrom
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
