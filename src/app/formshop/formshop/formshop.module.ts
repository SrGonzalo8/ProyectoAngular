import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormshopComponent } from './formshop.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { Router } from '@angular/router';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageServiceModule } from 'ng-zorro-antd/message';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzSelectModule,
    NzFormModule,
    NzDatePickerModule,
    NzUploadModule,
    NzMessageServiceModule,
    NzUploadModule,
    ReactiveFormsModule,
    NgModule,
    Router,
  ],
  declarations: [],
  exports: [],
})
export class FormshopModule {}
