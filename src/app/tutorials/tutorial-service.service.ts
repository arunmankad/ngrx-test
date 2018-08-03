import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import {Tutorial} from './model/tutorial.model';


@Injectable({
  providedIn: 'root'
})
export class TutorialServiceService {
  private tutorialsUrl = 'api/tutorials';
  private tutorials: Tutorial[];
  constructor(private http: HttpClient) { }
  getTutorials(): Observable<Tutorial[]> {
    // if (this.tutorials) {
    //   return of(this.tutorials);
    // }
    return this.http.get<Tutorial[]>(this.tutorialsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        // tap(data => this.tutorials = data),
        catchError(this.handleError)
      );
  }
  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
