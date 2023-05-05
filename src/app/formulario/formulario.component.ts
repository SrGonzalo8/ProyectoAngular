import { Component } from '@angular/core';
import { FormularioModule } from './formulario.module';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass'],
})
export class FormularioComponent {
  static module(arg0: string) {
    throw new Error('Method not implemented.');
  }
  persona = {
    name: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    birthdate: '',
  };

  procesar() {
    console.log(this.persona);
  }
}
