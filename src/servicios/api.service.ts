import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,  } from 'rxjs';
import { User } from '../app/formulario/models/user.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public addUser(user: User): Observable<User> {
    const url = this.urlApi;
    return this.http.post<User>(url, user);
  }

  public modificarTabla(id: number, datos: any) { 
    return this.http.put(`/api/tabla/${id}`, datos);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.urlApi, user) 
  }

}
