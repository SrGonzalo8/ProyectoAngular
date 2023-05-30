import { Component } from '@angular/core';
import { FormularioModule } from './formulario.module';
import { ApiService } from '../../servicios/api.service';
import { User } from './models/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from './models/group.interface';
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
  groupIds: number[];
  listOfGroups: Group[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    this.getGroups();
  }

  procesar() {
    const newUser: User = {
      id: 0,
      firstname: this.persona.firstname,
      lastname: this.persona.lastname,
      username: this.persona.username,
      email: this.persona.email,
      phone: this.persona.phone,
      birthdate: this.persona.birthdate,
      password: this.persona.password,
      groupIds: this.groupIds,
    };

    this.apiService.addUser(newUser).subscribe((user) => {
      if (user && user.id) {
        const userId = user.id;
        this.router.navigate(['userstbl']);
      }
    });
  }
  getGroups() {
    this.apiService.getGroups().subscribe((groups: Group[]) => {
      this.listOfGroups = groups;
    });
  }
}
