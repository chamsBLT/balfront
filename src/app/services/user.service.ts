import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL = 'http://service2.chxws.live:8083/login/user';

  constructor(private httpClient: HttpClient) { }

  signUp(user: any) {
    return this.httpClient.post(`${this.API_URL}/add-user`, user);
  }

  signIn(username: any) {
    return this.httpClient.get(`${this.API_URL}/signIn/${username}`);
  }
}
