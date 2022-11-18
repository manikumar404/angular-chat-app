import { Injectable } from '@angular/core';
import {Users} from "@chat-app-fe/shared/services";
import {Apollo, gql} from "apollo-angular";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FriendsApiService {
  QUERY = gql`
    query {
      users{
        uId
        name
        messageIds
        message{
          title
          author
          messageId
          messages
        }
      }
    }
  `

  constructor(private apollo: Apollo) { }

  fetchAllFirends(): Observable<Users>{
    return this.apollo.query<Users>({
      query: this.QUERY,
      variables: {},
      fetchPolicy: 'no-cache',
    }).pipe(
      tap(val => console.log(val)),
      map(value => value.data)
    )

  }
}
