import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from '../app/formulario/models/user.interface';
import { Group } from '../app/formulario/models/group.interface';
import { Product } from '../app/formulario/models/product.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi = 'http://localhost:3000/users/';
  private urlApiGroups = 'http://localhost:3000/groups/';
  private urlApiProducts = 'http://localhost:3000/products/';
  apiUrl: any;

  constructor(private http: HttpClient) {}

  //SERVICIOS GRUPOS
  public addGroup(group: Group): Observable<Group> {
    const urlgroup = this.urlApiGroups;
    return this.http.post<Group>(urlgroup, group);
  }

  public getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.urlApiGroups);
  }

  public deleteGroup(id: number): Observable<void> {
    const urlgroup = `${this.urlApiGroups}${id}`;
    return this.http.delete<void>(urlgroup);
  }
  public addUserToGroup(groupId: number, userId: number): Observable<User> {
    const url = `${this.urlApiGroups}${groupId}/addUser/${userId}`;
    return this.http.post(url, null);
  }
  public getUsersByGroup(groupId: number): Observable<User[]> {
    const url = `${this.urlApiGroups}${groupId}/users`;
    return this.http.get<User[]>(url);
  }

  //SERVICIOS USERS
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlApi);
  }

  public getUser(userId: number): Observable<User> {
    return this.http.get<User>(this.urlApi + userId);
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
    return this.http.put<User>(this.urlApi + user.id, user);
  }

  public deleteUserFromGroup(
    groupId: number,
    userId: number
  ): Observable<void> {
    const url = `${this.urlApiGroups}${groupId}/removeUser/${userId}`;
    return this.http.delete<void>(url);
  }

  //SERVICIOS PRODUCTOS
  public addProduct(product: Product): Observable<Product> {
    const urlproduct = this.urlApiProducts;
    return this.http.post<Product>(urlproduct, product);
  }

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlApiProducts);
  }

  public deleteProduct(id: number): Observable<void> {
    const urlproduct = `${this.urlApiProducts}${id}`;
    return this.http.delete<void>(urlproduct);
  }
}
