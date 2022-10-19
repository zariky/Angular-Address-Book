import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of, switchMap, throwError } from 'rxjs';
import UserResponse from '../model/user-response.model';
import { ErrorHandlerService } from './error-handler.service';
import { environment as env } from '../../environments/environment';
import User from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = `${env.api.url}?seed=${env.api.seed}&results=${env.api.results}`;

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {}

  /**
   * Retrieves the list of all available Users (contacts)
   *
   * @returns - list of Users (contacts)
   */
  getUsers(): Observable<User[]> {
    return this.http.get<UserResponse>(this.usersUrl).pipe(
      delay(1000),
      switchMap((users) => of(users.results)),
      catchError(this.errorHandlerService.handleError('Loading Contacts'))
    );
  }

  /**
   * Search for the User by Id
   *
   * Implemented as immitation of API call to get user by ID
   * TODO: Refactor to real integration with API endpoint when it will be provided by back-end team
   *
   * @param id - User Id
   * @returns - User retrieved by Id
   * @throws - Thorws exception if user not found
   */
  findUserById(id: string): Observable<User | never> {
    return this.getUsers().pipe(
      switchMap((users) => {
        const user = users.find((user) => user.login.uuid === id);
        if (!user) {
          return throwError(() => new Error(`Unable to find user with id = ${id}`));
        }
        return of(user);
      }),
      catchError(this.errorHandlerService.handleError('Find Contact'))
    );
  }
}
