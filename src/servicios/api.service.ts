import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  filter(arg0: (users: any) => boolean): ApiService {
    throw new Error('Method not implemented.');
  }
  private urlApi = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}
  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public removeUser(id: number): Observable<any> {
    return this.http.delete(this.urlApi);
  }
  
}
