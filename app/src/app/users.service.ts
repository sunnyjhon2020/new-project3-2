import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,} from 'rxjs';
import { of } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:8081/api/register', data);
  }

  userLogin(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:8081/api/login', data);
  }

  isUserLoggedIn(): Observable<any> {
    return of(localStorage.getItem('userLoggedIn'));
  }
}
