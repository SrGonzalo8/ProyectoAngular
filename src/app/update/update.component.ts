import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { User } from '../formulario/models/user.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent {
  persona = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    birthdate: '',
  };
  constructor(private apiService: ApiService) {}

  users: any[] = [];
  procesarUpdate() {
    const updateUser: User = {
      firstname: this.persona.firstname,
      lastname: this.persona.lastname,
      username: this.persona.username,
      email: this.persona.email,
      phone: this.persona.phone,
      birthdate: this.persona.birthdate,
      password: this.persona.password,
    };
    this.apiService
      .updateUser(updateUser)
      .subscribe((user) => this.users.push(user));
  }

  
}
