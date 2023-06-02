import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private saveUrl = "http://localhost:8080/user/save";
  private updateUrl = "http://localhost:8080/user/update";
  private findAllUrl = "http://localhost:8080/user/findAll";
  private findByEmail = "http://localhost:8080/user/findByEmail?email"

  constructor(private httpClient: HttpClient) { }

  findAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.findAllUrl}`);
  }

  saveUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.saveUrl}`, user);
  }
}
