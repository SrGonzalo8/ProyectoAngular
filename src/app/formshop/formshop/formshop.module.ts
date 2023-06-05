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
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '../../icons-provider.module';
import { UpdateModule } from '../../update/update.module';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzFormModule,
    NzDatePickerModule,
    NzUploadModule,
    NzMessageServiceModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
  ],
  declarations: [FormshopComponent],
  exports: [],
})
export class FormshopModule {}
