import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from '../app/formulario/models/user.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}

  public getUser(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public addUser(user: User): Observable<User> {
    const url = this.urlApi;
    return this.http.post<User>(url, user);
  }

  public deleteUser(id: number): Observable<void> {
    const url = `${this.urlApi}${id}`;
    return this.http.delete<void>(url);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.urlApi, user);
  }
}
