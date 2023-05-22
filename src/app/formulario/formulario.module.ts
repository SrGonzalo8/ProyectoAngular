import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzSelectModule,
    NzFormModule,
    NzDatePickerModule,
  ],
  declarations: [FormularioComponent],
  exports: [FormularioComponent],
})
export class FormularioModule {}
