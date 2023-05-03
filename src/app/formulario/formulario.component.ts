import { Component } from '@angular/core';
import { FormularioModule } from './formulario.module';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass'],
})
export class FormularioComponent {
  persona = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    birthdate: '',
  };

  procesar() {
    console.log(this.persona);
  }
}
