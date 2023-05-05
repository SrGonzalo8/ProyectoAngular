import { Component } from '@angular/core';
import { FormularioModule } from './formulario.module';
import { ApiService } from '../../servicios/api.service';
import { user } from './models/user.interface';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass'],
})
export class FormularioComponent {
  users: user[] = [];
  constructor(private ApiService: ApiService) {}

  persona = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    birthdate: '',
  };
  procesar() {
    const newUser: user = {
      name: this.persona.name,
      lastname: this.persona.lastname,
      username: this.persona.username,
      email: this.persona.email,
      phone: this.persona.phone,
      birthdate: this.persona.birthdate,
    };
    this.ApiService.addUser(newUser).subscribe((user) => this.users.push(user));
  }
}
