import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, NzSelectModule],
  declarations: [FormularioComponent],
  exports: [FormularioComponent],
})
export class FormularioModule {}
