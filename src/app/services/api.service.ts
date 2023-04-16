import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:3000/enquiry';
  constructor(private http: HttpClient) { }

  // Add User
  postRegistration(registerObj: User){
    return this.http.post<User>(`${this.baseUrl}`, registerObj)
  }

  // Get User
  getRegisteredUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  // Update User
  updateRegisteredUser(registerObj: User, id: number){
    return this.http.put<User>(`${this.baseUrl}/${id}`, registerObj)
  }

  // DeleteRe User
  deleteRegisteredUse(id: number){
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }

  // Get User by ID
  getRegisteredUserId(id: number){
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }
}
