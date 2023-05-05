import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { FormularioComponent } from 'src/app/formulario/formulario.component';
import { user } from '../app/formulario/models/user.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi); //cambiar any
  }

  addUser(user: user): Observable<user> {
    const url = `${this.urlApi}/users`;
    return this.http.post<user>(this.urlApi, user);
  }
  
}
