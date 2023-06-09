import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzAlertModule,
    NzSelectModule,
  ],
  declarations: [UpdateComponent],
  exports: [UpdateComponent],
})
export class UpdateModule {}
