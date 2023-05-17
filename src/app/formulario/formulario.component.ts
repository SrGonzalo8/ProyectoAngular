import { Component } from '@angular/core';
import { FormularioModule } from './formulario.module';
import { ApiService } from '../../servicios/api.service';
import { User } from './models/user.interface';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass'],
})
export class FormularioComponent {
  persona = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    birthdate: '',
  };
  groupIds = [];
  listOfGroups = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private apiService: ApiService) {}

  users: any[] = [];
  procesar() {
    const newUser: User = {
      firstname: this.persona.firstname,
      lastname: this.persona.lastname,
      username: this.persona.username,
      email: this.persona.email,
      phone: this.persona.phone,
      birthdate: this.persona.birthdate,
      password: this.persona.password,
    };
    this.apiService.addUser(newUser).subscribe((user) => this.users.push(user));
    console.log(this.persona); //se puede borrar
  }
}
